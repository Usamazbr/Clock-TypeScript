// import { useState, useEffect } from "react";
import Greet from './components/Greet';
import Timer from './components/Timer';

function App() {

  const zoneList = [
    {
    name: 'New York',
    gmt: -10
    },
    {
    name: 'London',
    gmt: -5
    },
    {
    name: 'Tokyo',
    gmt: 4
    }
  ]

  return (
    <div className="flex flex-col text-white">
      <Greet name='Pakistan' msgcount={0} isLoggedIn={false}/>
      <Timer name='Pakistan' gmt={0}/>
      <Timer name={zoneList[0].name} gmt={zoneList[0].gmt}/>
      <Timer name={zoneList[1].name} gmt={zoneList[1].gmt}/>
      <Timer name={zoneList[2].name} gmt={zoneList[2].gmt}/>
      
    </div>
  );
}

export default App;
