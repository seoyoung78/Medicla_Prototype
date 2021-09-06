import { useEffect } from "react";
import { GridFitStyle } from "realgrid";
import { physicalReviewData } from "../../data";
import { physicalReviewList } from "../../grids/Settings_진료";
import { Grid, GridInst, useGrid } from "../../utils/hooks/useGrid"

export default function PhysicalReview() {
  const physicalReveiwGrid = useGrid();

  const gridSetting = ({ grid, view, provider } : GridInst) => {
    grid.bindData(physicalReviewData);
    view.setOptions({
      display: {
        fitStyle: GridFitStyle.EVEN_FILL,
        rowHeight: 20,
      }
    })
  };

  useEffect(() => {
    physicalReveiwGrid.handler(gridSetting);
  }, [])

  return (
    <div className="section">
      <div className=" panel shadow fx1">
        <div className="col">
          <div className="left">
            <img src="./imgs/vital.png" alt=""/>
            <span>신체사정</span>
          </div>
          <div className="right">
            <button><img src="./imgs/graph.png" alt=""/></button>
            <button><img src="./imgs/setting.png" alt=""/></button>
          </div>
        </div>
        <div style={{height: 200}}>
          <Grid ref={physicalReveiwGrid.gridRef} gridSetting={physicalReviewList}/>
        </div>
      </div>
    </div>
    
  )
}