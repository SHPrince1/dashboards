import React, { useState } from "react";
import SbItem from "../styles/sidebaritem.module.css";
import * as Icon from "react-bootstrap-icons";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";

const Sidebaritem = () => {
  const [open, Setopen] = useState(false);

  function toggleOpen() {
    Setopen(!open);
  }
  return (
    // <div className={open ? "SbItem.sidebarItems open" : "SbItem.sidebarItems"}>
    //   <div className={SbItem.sidebarTitle}>
    //     <span >
    //       <IoIosArrowDropdownCircle className={SbItem.toggleBtn} />
    //       General
    //     </span>

    //     <span>
    //       <AiFillSetting />
    //     </span>
    //   </div>
    //  <div className={SbItem.sidebarContent}>
    //   hello

    //  </div>

    // </div>

    <div className={SbItem.parentBox}>
      <div className={SbItem.genBox}>
        <div className={SbItem.genTitle} onClick={toggleOpen}>
          <AiFillSetting />
          GENERAL
          <IoIosArrowDropdownCircle />
        </div>
        <div className= {open ?  SbItem.contents :  SbItem.hide}>
          General CONTENTS
          General CONTENTS
          General CONTENTS
        
        </div>
      </div>

      <div className={SbItem.genBox}>
        <div className={SbItem.genTitle} >
          <AiFillSetting />
          ACCOUNT
          <IoIosArrowDropdownCircle />
        </div>
        <div className= {SbItem.contents }>
          General CONTENTS
          General CONTENTS
          General CONTENTS
        
        </div>
      </div>
      
    </div>
  );
};

export default Sidebaritem;
