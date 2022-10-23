import React, { useState } from "react";
import sBar from "../styles/sidebar.module.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SideBarData } from "./sidebarData";

import { IconContext } from "react-icons/lib";

const SideBar = () => {
  const [sidebar, setsidebar] = useState(true);
  function showSidebar() {
    setsidebar(!sidebar);
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={sBar.sidebar}>
          <Link to="#" className={sBar.menuBar}>
            <FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? sBar.navMenuActive : sBar.navMenu}>
          <ul className={sBar.navMenuItems}>
            <li className={sBar.navbarToggle}>
              <Link to="#" className={sBar.menuBar}>
                <FaBars />
              </Link>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={sBar.navText}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default SideBar;
