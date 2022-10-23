import React from "react";
import Hstyle from ".././styles/flight.module.css";
import LogoImg from "../images/log.png"; 
import LayerImg from "../images/layer.png"; 

const FlightDetails = () => {
  return (
    <div>
      <div className={Hstyle.sbParentBox}>
        <div className={Hstyle.FlightrowBox}>
          <div className={Hstyle.FlightcolBox}>
            <div className={Hstyle.titleImage}>
              <p>Total Flight Bookng</p>
              <img src={LogoImg}  alt ="Image"/>
            </div>

            <div className={Hstyle.price}>5, 400</div>
            <div className={Hstyle.textArrow}>
            <img src={LayerImg}  alt ="Image"/>
              <p><span style={{color:"#FCA62B; font-weight: bold;"}}>80%</span> incrrease since last month</p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
