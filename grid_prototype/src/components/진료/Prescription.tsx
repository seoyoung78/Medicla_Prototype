import { useEffect } from "react";
import { GridFitStyle } from "realgrid";
import { prescriptionData } from "../../data";
import { prescriptionList } from "../../grids/Settings_진료";
import { useGrid, GridInst, Grid } from "../../utils/hooks/useGrid"

export default function Prescription() {
  const prescriptionGrid = useGrid();

  const gridSetting = ({ grid, view, provider } : GridInst) => {
    grid.bindData(prescriptionData);
    view.setOptions({
      display: {
        fitStyle: GridFitStyle.EVEN_FILL,
        rowHeight: 20,
      },
    })
  };

  useEffect(() => {
    prescriptionGrid.handler(gridSetting);
  })

  return (
    <div className="box">
      <div className=""> 
        <img src="./imgs/order.png" alt=""></img>
        <span>처방</span>
        <button>
          <img src="./imgs/setting.png" alt=""></img>
        </button>
      </div>
      <div style={{height: 200}}>
        <Grid ref={prescriptionGrid.gridRef} gridSetting={prescriptionList}/>
      </div>
    </div>
  )
}