import { OBTTab, OBTTabs } from "luna-orbit";
import { useState } from "react";

export default function PrescriptionInquiry() {
  const [state, setState] = useState({
    value: '1'
  });

  return (
    <div className="section">
      <div className="panel shadow fx1">
        <div>
          <img src="./imgs/order.png" alt=""></img>
          <span>처방조회</span>
          <button><img src="./imgs/setting.png" alt=""></img></button>
        </div>
        <div>
          <OBTTabs value={state.value} onChange={(e) => setState({value: e.value})}>
            <OBTTab labelText="과거기록" value="1">
              <p>과거기록</p>
            </OBTTab>
            <OBTTab labelText="약속처방" value="2">
              <p>약속처방</p>
            </OBTTab>
            <OBTTab labelText="슬립" value="3">
              <p>슬립</p>
            </OBTTab>
          </OBTTabs>
          탭 + 그리드
        </div>
      </div>
    </div>
  )
}