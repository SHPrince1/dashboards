import React from "react";
import "../App.css";
import Hstyle from ".././styles/home.module.css";
import FlightDetails from "../components/flight-details";
import Barchart from "../components/barchart";
import Barcharts from "../components/barcharts";
import PaymentOverview from "../components/payment-overview";
const Home = () => {
  return (
    <>
      <div className="pageContent">
        {/* <h1>HOME</h1> */}
        <div className={Hstyle.sbParentBox}>
          <div className={Hstyle.FlightrowBox}>
            <div className={Hstyle.FlightcolBox}>
              <FlightDetails />
            </div>
            <div className={Hstyle.FlightcolBox}>
              <FlightDetails />
            </div>
            <div className={Hstyle.FlightcolBox}>
              <FlightDetails />
            </div>
            <div className={Hstyle.FlightcolBox}>
              <FlightDetails />
            </div>
          </div>
        </div>
        <div className={Hstyle.bchart}>
          <Barchart />
          <PaymentOverview />
        </div>
        <div className={Hstyle.bchart}>
        <Barcharts />
        </div>
      </div>
    </>
  );
};

export default Home;
