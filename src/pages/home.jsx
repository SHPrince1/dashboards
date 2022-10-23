import React from "react";
import "../App.css";
import Hstyle from ".././styles/home.module.css";
import FlightDetails from "../components/flight-details";
const Home = () => {
  return (
    <>
      <div className="pageContent">
        <h1>HOME</h1>
        <div className={Hstyle.sbParentBox}>
          <div className={Hstyle.FlightrowBox}>
            {/* <div className={Hstyle.FlightcolBox}> */}
              <FlightDetails />
            {/* </div> */}
            <div className={Hstyle.FlightcolBoxs}>
            <FlightDetails />
            </div>
            <div className={Hstyle.FlightcolBoxs}>
            <FlightDetails />
            </div>
            <div className={Hstyle.FlightcolBoxs}>
            <FlightDetails />
            </div>
          </div>
        </div>

        {/* <FlightDetails */}
        
        
      </div>
    </>
  );
};

export default Home;
