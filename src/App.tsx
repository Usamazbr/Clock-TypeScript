// import { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import Greet from "./components/Greet";
import Navbar from "./components/Navbar";
import TimeGauge from "./components/TimeGauge";
// import Timer from "./components/Timer";
// import zone from "./data/capitals.json";

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden p-4">
      <Navbar />
      <Greet name="Pakistan" msgcount={0} isLoggedIn={false} />
      <TimeGauge />
      {/* <Timer name="" gmt={0} />
      <div className="flex flex-row rounded-lg">
        <div className="w-full"></div>
        <div className="flex flex-row m-2 mr-14 mx-6 space-x-2">
          {zone.list.map((place) => (
            <Timer name={place.name} gmt={place.gmt} />
          ))}
        </div>
      </div> */}
      <Footer/>
    </div>
  );
}

export default App;
