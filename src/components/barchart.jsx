import React from "react";
import Hstyle from ".././styles/barchart.module.css";
import "../App.css";

import Grp from "../images/grp.png";
import Ellipse from "../images/ellipse.png";
const Barchart = () => {
  return (
    <>
      <div className="pageContents">
        <div>
          <div className={Hstyle.dRow}>
            <div className={Hstyle.dCol}>
              <div className={Hstyle.bartext}>Flight Booking Overview</div>
              <div className={Hstyle.imgBox}>
                  <img className={Hstyle.Elipse} src={Ellipse} alt="Image" width={"150px"} height={"150px"}/>
                  <img src={Grp} alt="Image" width={"350px"} height={"350px"} />
              </div>

              <div className={Hstyle.bookedR}>
                <div className={Hstyle.bookF}>
                    <div className={Hstyle.box}></div>
                    <p>Booked Flight</p>
                </div>
                <div className={Hstyle.bookF}>
                    <div className={Hstyle.box2}></div>
                    <p>Pending Flight Bookings</p>
                </div>
                <div className={Hstyle.bookF}>
                    <div className={Hstyle.box3}></div>
                    <p>Failed Flight Bookins</p>
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
