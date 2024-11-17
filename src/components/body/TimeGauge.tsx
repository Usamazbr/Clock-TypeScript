import { useState } from "react";
import Timer from "./Timer";
import zones from "../../data/capitals.json"; // Import the JSON file

const TimeGauge = () => {
  const [selectedZone, setSelectedZone] = useState({ name: "Pakistan", gmt: 5 });

  const handleSelectZone = (zone: { name: string; gmt: number }) => {
    setSelectedZone(zone);
  };

  return (
    <div className="flex flex-col h-[90%] overflow-hidden space-y-2 rounded-lg">
      {/* Display the selected time zone prominently */}
      <Timer name={selectedZone.name} gmt={selectedZone.gmt} small={false} />

      <div className="flex flex-row h-1/5 items-center rounded-lg">
        <div className="w-full"></div>
        <div className="flex flex-row space-x-3">
          {zones.list.map((place) => (
            <div
              key={place.name}
              onClick={() => handleSelectZone(place)} // Handle selection on click
              className="cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <Timer name={place.name} gmt={place.gmt} small={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeGauge;
