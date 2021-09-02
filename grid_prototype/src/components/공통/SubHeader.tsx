import { useRecoilState } from "recoil";
import { naviState } from "../../atoms/Recoils_진료";

function SubHeader() {
  const [navi, setNavi] = useRecoilState<boolean>(naviState);

  return (
    <div className="sub-header">
      <div className="left">
        <button type="button" className="btn-menu" onClick={() => setNavi(!navi)}>
          <span className="meterial-icons">메뉴</span>
        </button>
        <span className="svg-title">
          <h2>진료</h2>
        </span>
      </div>
      <div className="right">

      </div>
    </div>
  )
}

export default SubHeader;