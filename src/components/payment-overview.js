import React from "react";
import Hstyle from ".././styles/paymentoverview.module.css";
import "../App.css";

import Grp from "../images/grp.png";
import layer2 from "../images/layer2.png";
const Barchart = () => {
  return (
    <>
      <div className="pageContents">
        <div>
          <div className={Hstyle.dRow}>
            <div className={Hstyle.dCol}>
              <div className={Hstyle.bartext}>Payment Overview</div>
              <div className={Hstyle.imgBox}>
                  <img className={Hstyle.Elipse} src={layer2} alt="Image" width={"280px"} height={"280px"}/>
              </div>

              <div className={Hstyle.bookedR}>
                <div className={Hstyle.bookF}>
                    <div className={Hstyle.box}></div>
                    <p>Confirmed Payment</p>
                </div>
                <div className={Hstyle.bookF}>
                    <div className={Hstyle.box2}></div>
                    <p>Pending  Payment</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Barchart;
