import React from "react";
import "../styles/sidebar.css";

import Sidebaritem from "./sidebaritem";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <Sidebaritem />
      </div>
    </>
  );
};

export default SideBar;
