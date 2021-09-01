import { useEffect, useState } from "react";
import {
  ColumnFilter,
  GridBase,
  GridFitStyle,
  SelectionStyle,
  SortCase,
  SortDirection
} from "realgrid";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { UFOMenuField } from "luna-ufo";
import Tabs from "./Tabs";
import Chart from "./Chart";
import DateBox from "./DateBox";
import {
  selectedPatState,
  chgStatInfoState
} from "../../atoms/Recoils_진단검사";
import { gridLayout, waitPatListGrid } from "../../grid/Settings_진단검사";
import {
  IWaitPatListProps,
  IPatient,
  IChgStatCol
} from "../../types/Interface_진단검사";
import { wtPatLstConst } from "../../utils/constants";
import {
  useTitle,
  useTab,
  useDate,
  useAsync
} from "../../utils/hooks/customHooks";
import { GridInst, useGrid, Grid } from "../../utils/hooks/useGrid";
import { dateToStrFormat, createFilter } from "../../utils/util";

const style = {
  title: {
    marginBottom: "10px"
  },
  testDateInput: {
    width: "100px",
    backgroundColor: "white",
    border: "1px solid rgb(216, 216, 216)",
    marginRight: "5px"
  },
  testDate: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "14px",
    border: "none",
    width: "100%"
  },
  marginRight: {
    marginRight: "5px"
  }
};

//그리드 초기 설정
const mainGridInitializer =
  (
    gridData: any[],
    setSelectedPat: Function,
    stateFilter: ColumnFilter[],
    testRoomFilter: ColumnFilter[],
    stateList: string[]
  ) =>
  ({ grid, view, provider }: GridInst) => {
    //데이터 바인드
    grid.bindData(gridData);

    //필터 설정 (해줘야 자동 필터링 걸 수 있음)
    view.setColumnFilters(wtPatLstConst.state.columnName, stateFilter);
    view.setColumnFilters("검사실", testRoomFilter);

    //grid 모양 설정
    view.setFooters({ visible: false }); //하단에 E .. 바 없앰
    view.setStateBar({ visible: false }); //인디케이터(no tpf) 셀 옆 빈 셀? 없앰
    view.setCheckBar({ visible: false }); //체크바 없앰
    view.displayOptions.fitStyle = GridFitStyle.EVEN_FILL; //컬럼넓이 전체 넓이만큼 채우기
    view.displayOptions.selectionStyle = SelectionStyle.ROWS; //셀 선택 시 로우 전체 선택
    view.displayOptions.showEmptyMessage = true; //데이터 없으면 데이터없음 메시지 on
    view.displayOptions.emptyMessage = "데이터가 없습니다."; //데이터없음 메시지

    //컬럼 레이아웃 설정 (성별, 나이 셀 합치기 등)
    view.setColumnLayout(gridLayout);

    //선택한 dataRow 가 변경됐을 때의 콜백. onCurrentRow 는 index 가 변경되었을 때의 콜백임.
    view.onCurrentRowChanged = (
      grid: GridBase,
      oldRow: number,
      newRow: number
    ) => {
      if (newRow! >= 0) {
        const data = provider.getJsonRow(newRow);

        setSelectedPat({ ...data, index: data.dataRow });
      }
    };

    //상태값별 정렬 커스텀 sort 함수 설정
    provider.setDataComparer("stat", (field, row1, row2) => {
      let state = [];
      stateList.map((s, orderIndex) => {
        state[s] = orderIndex;
      });

      var val1 = provider.getValue(row1, field);
      var val2 = provider.getValue(row2, field);
      return val1 == val2 ? 0 : state[val1] > state[val2] ? 1 : -1;
    });

    //정렬 설정
    view.orderBy(
      ["stat", "mdcr_hm"],
      [SortDirection.ASCENDING],
      [SortCase.INSENSITIVE]
    );
  };

//그리드 tab 이벤트
const mainGridChangedAction =
  (tab: string, testRoom: string) =>
  ({ view }: GridInst) => {
    //탭 선택 시 자동 필터링
    if (tab != wtPatLstConst.state.columnValues.ALL) {
      view.activateAllColumnFilters(wtPatLstConst.state.columnName, false);
      view.activateColumnFilters(wtPatLstConst.state.columnName, [tab], true);
    } else {
      view.activateAllColumnFilters(wtPatLstConst.state.columnName, true);
    }

    //검사실 선택 시 자동 필터링
    if (testRoom != "") {
      view.activateAllColumnFilters("검사실", false);
      view.activateColumnFilters("검사실", ["검사실" + testRoom], true);
    } else {
      view.activateAllColumnFilters("검사실", true);
    }
  };

export default function WaitPatList({
  stateList,
  testRoomList,
  requestDataCallback
}: IWaitPatListProps) {
  const setSelectedPat = useSetRecoilState<IPatient | null>(selectedPatState);
  const resetSelectedPat = useResetRecoilState(selectedPatState);

  const title = useTitle();
  const { tab, onTabChange } = useTab("전체");
  const { dateValue, setDateValue } = useDate();
  const mainGrid = useGrid();

  //조회할 검사일자 변경 시 api 재호출
  const { state } = useAsync(requestDataCallback, [
    dateToStrFormat(dateValue.to, "yyyymmdd")
  ]);
  const { data: waitPatList } = state;
  const [data, setData] = useState<any>([]);

  const [testRoom, setTestRoom] = useState<string>("0");

  //검사리스트에서 상태값 변경 시 변경 정보
  const chgStatInfo = useRecoilValue<IChgStatCol | null>(chgStatInfoState);

  useEffect(() => {
    if (data.length <= 0) {
      resetSelectedPat();
    }
  }, [data]);

  //api 호출 시 초기 그리드 설정, 차트 설정
  useEffect(() => {
    setData(waitPatList);

    mainGrid.handler(
      mainGridInitializer(
        waitPatList,
        setSelectedPat,
        createFilter(stateList),
        createFilter(testRoomList),
        stateList
      )
    );
  }, [waitPatList]);

  //탭, 검사실 별 필터링
  useEffect(() => {
    mainGrid.handler(mainGridChangedAction(tab, testRoom));
  }, [tab, testRoom]);

  //검사리스트에서 상태값 변경 시 대기환자리스트 상태값도 갱신
  useEffect(() => {
    //if 처리 안해주면 다른 페이지에서 넘어올 때 chgStateInfo 가 null이 돼서 오류남
    if (chgStatInfo) {
      mainGrid.handler(({ view, provider }) => {
        provider.setValue(
          chgStatInfo.index!,
          wtPatLstConst.field.STAT,
          chgStatInfo?.value
        );

        setData(provider.getJsonRows(-1));

        //그리드 셀 포커스 설정. 안하면 데이터 정렬 시 클릭한 행 포커스 안 옮겨짐
        view.setCurrent({ dataRow: chgStatInfo?.index! });
      });
    }
  }, [chgStatInfo]);

  return (
    <div style={{ height: "100%" }}>
      <h4 style={style.title}>{title} 현황</h4>
      <div style={style.testDate}>
        <div style={style.marginRight}>검사일자</div>
        <DateBox
          showFrom={false}
          showPastBtn={false}
          value={dateValue}
          setValue={setDateValue}
        />
        <div className="LS_saoinput" style={style.testDateInput}>
          <UFOMenuField
            selectKey={2}
            value={testRoom}
            list={testRoomList}
            onChange={(event, value) => {
              setTestRoom(value);
            }}
            onMoveFocus={() => {}}
          />
        </div>
      </div>
      <Chart stateList={stateList} data={data} />
      <Tabs stateList={stateList} data={data} onChange={onTabChange} />
      <div style={{ height: "calc(100% - 300px)" }}>
        {/* 그리드 외 나머지 요소들이 차지하고 있는 높이 만큼 빼줘야 함. */}
        <Grid ref={mainGrid.gridRef} gridSetting={waitPatListGrid} />
      </div>
    </div>
  );
}