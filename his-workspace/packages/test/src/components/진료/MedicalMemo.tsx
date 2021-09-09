import { OBTMultiLineTextField } from "luna-orbit";
import { useState } from "react";

function MedicalMemo () {
  const [content, setContent] = useState('');

  return(
    <div className="section">
      <div className="panel shadow fx1">
        <div>
          <img src="./imgs/memo.png" alt=""/>
          <span>진료메모</span>      
        </div>
        <div>
          <OBTMultiLineTextField value={content} onChange={(e) => setContent(e.value)} fixed={true} placeHolder="진료메모를 입력하세요."/>
        </div>
      </div>
    </div>
  )
}

export default MedicalMemo;