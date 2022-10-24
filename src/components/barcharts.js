import React from "react";
import Hstyle from ".././styles/bars.module.css";
import Barch from "../images/barcharts.png";
import "../App.css";

const Barcharts = () => {
  return (
    <>
      <div className={Hstyle.pageContents}>
        <div className={Hstyle.barsBox}>
          Newly Registered Customers
          <div className={Hstyle.chartsBox}>
            <div className={Hstyle.imgCon}>
              <img src={Barch} alt="Image" width={"1000px"} height={"500px"} />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Barcharts;
