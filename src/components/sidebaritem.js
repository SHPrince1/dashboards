import React from "react";
import SbItem from "../styles/sidebaritem.module.css";
import * as Icon from "react-bootstrap-icons";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";

const Sidebaritem = () => {
  return (
    <div className={SbItem.sidebarItems}>
      <div className={SbItem.sidebarC}>
        <AiFillSetting size={30} />
        <p>General</p>
        <IoIosArrowDropdownCircle size={30}/>
      </div>
    </div>
  );
};

export default Sidebaritem;
