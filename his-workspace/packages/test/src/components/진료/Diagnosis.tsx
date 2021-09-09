import '../../init';
import { useEffect } from "react";
import { GridFitStyle } from "realgrid";
import { diagnosisList } from "../../grids/Settings_진료";
import { useGrid, GridInst, Grid } from "../../utils/hooks/useGrid"
import { getDList } from '../../utils/api/ApiService_진료';

export default function Diagnosis() {
  const diagnosisGrid = useGrid();

  const gridSetting = async ({ grid, view, provider } : GridInst) => {
    let list = await getDList();
    grid.bindData(list);
    // 순번 제거
    view.setRowIndicator({visible: false});
    // 풋터 제거
    view.setFooters({visible: false});
    // 상태바 제거
    view.setStateBar({visible: false});
    // 화면 가득 채우기
    view.setOptions({
      display: {
        fitStyle: GridFitStyle.EVEN_FILL,
        rowHeight: 20,
      },
    })
  };

  useEffect(() => {
    diagnosisGrid.handler(gridSetting);
  }, []);

  return (
    <div className="box">
      <div>
          <img src="./imgs/lab.png" alt=""></img>
          <span>진단</span>
          <button>
            <img src="./imgs/setting.png" alt=""></img>
          </button>
        <div style={{height: 200}}>
          <Grid ref={diagnosisGrid.gridRef} gridSetting={diagnosisList}/>
        </div>
      </div>
    </div>
  )
}