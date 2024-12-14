import React from "react";
import style from "./index.module.css";
import { Search, Notifications, Person } from "@mui/icons-material";

function Topbar() {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <span className={style.logo}>Social Media</span>
      </div>
      <div className={style.center}>
        <Search className={style.searchIcon} />
        <input type="text" className={style.input} placeholder="Search here" />
      </div>
      <div className={style.right}>
        <div className={style.space}></div>
        <div className={style.icons}>
          <Notifications className={style.notification} />
          <Person className={style.person} />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
