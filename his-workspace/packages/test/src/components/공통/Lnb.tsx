import { useState } from "react";

export default function Lnb() {
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <div className="lnb">
      <div className="menu-block">
        <button type="button" className="menu-btn" onClick={() => setOpen(!open)}>진료</button>
        <div className={open? "menu-block on" : "menu-list"}>
          <li className="menu-link">진료메인</li>
          <li className="menu-link">상용구</li>
          <li className="menu-link">약속처방</li>
        </div>
      </div>
    </div>
  )
}