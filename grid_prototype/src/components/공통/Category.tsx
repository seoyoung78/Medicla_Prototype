import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { naviState } from "../../atoms/Recoils_진료";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
// import { categoryConst } from "../../utils/constants";

interface IMenu {
  key: string;
  title: string;
}

interface ICategory {
  key: string;
  title: string;
  menuList?: IMenu[];
}

function Menu({ category }: { category: ICategory }) {
  const [open, setOpen] = useState<boolean>(false);
  const setNavi = useSetRecoilState<boolean>(naviState);
  const location = useLocation();

  return (
    <div className={classNames({ "menu-block": true, on: open })}>
      <h3>
        <button
          type="button"
          className="menu-btn"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {category.title}
        </button>
      </h3>
      <ul className="menu-list">
        {category.menuList?.map((menu: IMenu) => {
          return (
            <li
              key={category.key + menu.key}
              className={classNames({
                selected: location.pathname == `/${category.key}/${menu.key}`
              })}
            >
              <Link
                to={`/${category.key}/${menu.key}`}
                className="menu-link"
                onClick={() => {
                  setNavi(false);
                }}
              >
                {menu.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Navigation() {
  return (
    <div className="snb">
      {/* {categoryConst.map(category => {
        return <Menu key={category.key} category={category} />;
      })} */}
    </div>
  );
}