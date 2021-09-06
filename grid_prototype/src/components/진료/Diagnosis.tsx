import '../../init';
import { useEffect } from "react";
import { GridFitStyle } from "realgrid";
import { diagnosisData } from "../../data";
import { diagnosisList } from "../../grids/Settings_진료";
import { useGrid, GridInst, Grid } from "../../utils/hooks/useGrid"

export default function Diagnosis() {
  const diagnosisGrid = useGrid();

  const gridSetting = ({ grid, view, provider } : GridInst) => {
    grid.bindData(diagnosisData);
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