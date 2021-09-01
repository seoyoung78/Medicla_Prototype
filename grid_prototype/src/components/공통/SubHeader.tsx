import { useRecoilState } from "recoil";
import { naviState } from "../../atoms/Recoils_진료";

function SubHeader() {
  const [navi, setNavi] = useRecoilState<boolean>(naviState);

  return (
    <div className="sub-header">
      <div className="left">
        <button>
          
        </button>
      </div>
      <div className="right">

      </div>
    </div>
  )
}

export default SubHeader;