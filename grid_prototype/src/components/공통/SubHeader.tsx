import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { naviState } from "../../atoms/Recoils_진단검사";
import { useTitle } from "../../utils/hooks/customHooks";

export default function SubHeader() {
  const title = useTitle();
  const [navi, setNavi] = useRecoilState<boolean>(naviState);

  return (
    <div className="sub-header" style={{ backgroundColor: "#52B3CB" }}>
      <div className="left">
        <button
          type="button"
          className="btn-menu"
          onClick={() => {
            setNavi(!navi);
          }}
        >
          <span className="material-icons">menu</span>
          <span className="blind">메뉴</span>
        </button>
        <a href="./index.html" className="svg-title">
          <h2>{title}</h2>
        </a>
      </div>
    </div>
  );
}