import React from "react";
import Hstyle from ".././styles/home.module.css";

const FlightDetails = () => {
  return (
    <div>
      <div className={Hstyle.sbParentBox}>
        <div className={Hstyle.FlightrowBox}>
          <div className={Hstyle.FlightcolBox}>
            <div className={Hstyle.titleImage}>
              <p>Total Flight Bookng</p>
              <img src="log.png" />
            </div>

            <div className={Hstyle.price}>5, 400</div>
            <div className={Hstyle.textArrow}>
              <img src="log.png" />
              <p>80% incrrease since last month</p>
            </div>
          </div>
          {/* <div className={Hstyle.FlightcolBox}></div>
          <div className={Hstyle.FlightcolBox}></div>
          <div className={Hstyle.FlightcolBox}></div> */}
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
