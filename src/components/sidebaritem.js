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

  function toggleSet() {
    Setopen(!open);
  }

  const [opens, setOpens] = useState(false);

  function toggleBtn() {
    setOpens(!opens);
  }

  return (
    <>
    </>
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

    // <div className={SbItem.parentBox}>
    //   <div className={SbItem.genBox}>
    //     <div onClick={toggleOpen} className={SbItem.genTitle}>
    //       {/* <AiFillSetting  size={30}/> */}
    //       DASHBOARD
    //       <IoIosArrowDropdownCircle size={30} />
    //     </div>

    //     <div className={open ? SbItem.contents : SbItem.hide}>
    //       <div>
    //         <p>ICON</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={SbItem.genBox}>
    //     <div className={SbItem.genTitle}>
    //       {/* <AiFillSetting  size={30}/> */}
    //       CUSTOMERS
    //       <IoIosArrowDropdownCircle size={30} />
    //     </div>

    //     <div className={SbItem.content}></div>
    //   </div>
    //   <div className={SbItem.genBox}>
    //     <div className={SbItem.genTitle}>
    //       {/* <AiFillSetting  size={30}/> */}
    //       CHATS
    //       <IoIosArrowDropdownCircle size={30} />
    //     </div>

    //     <div className={SbItem.content}></div>
    //   </div>
    //   <div className={SbItem.genBox}>
    //     <div className={SbItem.genTitle}>
    //       {/* <AiFillSetting  size={30}/> */}
    //       PRODUCTS
    //       <IoIosArrowDropdownCircle size={30} />
    //     </div>

    //     <div className={SbItem.content}></div>
    //   </div>
    //   <div className={SbItem.genBox}>
    //     <div className={SbItem.genTitle}>
    //       {/* <AiFillSetting  size={30}/> */}
    //       ORDERS
    //       <IoIosArrowDropdownCircle size={30} />
    //     </div>

    //     <div className={SbItem.content}></div>
    //   </div>
    //   <div className={SbItem.genBox}>
    //     <div className={SbItem.genTitle}>
    //       {/* <AiFillSetting  size={30}/> */}
    //       SOURCES
    //       <IoIosArrowDropdownCircle size={30} />
    //     </div>

    //     <div className={SbItem.content}></div>
    //   </div>
    //   <div className={SbItem.genBox}>
    //     <div className={SbItem.genTitle}>
    //       {/* <AiFillSetting  size={30}/> */}
    //       STORE
    //       <IoIosArrowDropdownCircle size={30} />
    //     </div>

    //     <div className={SbItem.content}></div>
    //   </div>
    //   <div className={SbItem.genBox}>
    //     <div className={SbItem.genTitle}>
    //       {/* <AiFillSetting  size={30}/> */}
    //       SETTINGS
    //       <IoIosArrowDropdownCircle size={30} />
    //     </div>

    //     <div className={SbItem.content}></div>
    //   </div>
    // </div>
  );
};

export default Sidebaritem;
