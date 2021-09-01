import ReactECharts from "echarts-for-react";
import { IChartSetting } from "../../types/Interface_진단검사";

//차트 데이터(상태별 건수) 설정 생성
const createChartData = (stateList: string[], data: any[]) => {
  let result: IChartSetting[] = [];
  stateList.forEach((state: string) => {
    if (state != "전체")
      result.push({
        name: state,
        value: data.filter(d => d.stat === state).length
      });
  });

  return result;
};

const createOption = (labels, data) => {
  return {
    color: ["#FFF", "#FEBC2C", "#0C97FF", "#1FC47C"],
    tooltip: {
      trigger: "item"
    },
    legend: {
      top: "35%",
      left: "right",
      orient: "vertical",
      data: labels
    },
    series: [
      {
        name: "",
        type: "pie",
        selectedMode: "single",
        radius: [0, "30%"],
        label: {
          position: "center",
          fontSize: 15,
          fontWeight: 600,
          formatter: "{b} \n{c}건"
        },
        labelLine: {
          show: false
        },
        data: [
          {
            name: "대기중",
            value: data.find(d => d.name == labels[0])?.value
          }
        ]
      },
      {
        name: "",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          position: "inner",
          fontSize: 14,
          formatter: "{c}건"
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold"
          }
        },
        labelLine: {
          show: false
        },
        data: data
      }
    ]
  };
};

export default function Chart({ stateList, data }) {
  const chartData = createChartData(stateList, data);
  const labels = chartData.map(d => {
    return d.name;
  });

  return (
    <ReactECharts
      option={createOption(labels, chartData)}
      style={{ height: "200px" }}
    />
  );
}