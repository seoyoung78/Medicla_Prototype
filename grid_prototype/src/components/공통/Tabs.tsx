import { LUXTabs, LUXTab } from "luna-rocket/LUXTabs";
import { IStateCount } from "../../types/Interface_진단검사";

//탭에 상태별 건수 표시 위한 함수
const createStateCount = (stateList: string[], data: any = []) => {
  let values: any[] = [];
  values["전체"] = data.length;
  stateList.map(k => {
    if (k != "전체") values[k] = data.filter(w => w.stat === k).length;
  });

  return stateList.map(s => {
    return { name: s, value: values[s] };
  });
};

export default function Tabs({ stateList, data, onChange }) {
  return (
    <LUXTabs fullItem={true} onChange={onChange} style={{ width: "500px" }}>
      {createStateCount(stateList, data).map((item: IStateCount) => (
        <LUXTab
          key={item.name}
          label={`${item.name}(${item.value})`}
          value={item.name}
        />
      ))}
    </LUXTabs>
  );
}
