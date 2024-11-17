import { useState, useEffect } from "react";

type TimerProps = {
  name: string;
  gmt: number;
  small: boolean;
};

const Timer = ({ name, gmt, small }: TimerProps) => {
  const [nTime, setNTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => setNTime(new Date()), 1_000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Adjust the time based on GMT offset, using UTC as the base
  const adjustedTime = new Date(
    nTime.getUTCFullYear(),
    nTime.getUTCMonth(),
    nTime.getUTCDate(),
    nTime.getUTCHours() + gmt, // Adjust hours based on GMT offset
    nTime.getUTCMinutes(),
    nTime.getUTCSeconds()
  );

  return (
    <div
      className={`flex flex-col mx-auto ${
        small ? "p-1 px-2 bg-gray-800" : ""
      } rounded-lg`}
    >
      {small && (
        <h1 className="text-xl text-green-400 text-right font-semibold rounded-lg">
          {name}
        </h1>
      )}
      <h2
        className={`mx-auto ${
          small ? "w-full text-lg text-right" : "text-center text-xl18"
        }  text-[#e7e6e2] font-semibold font-mono rounded-lg`}
      >
        {adjustedTime.toLocaleTimeString("en-GB")}
      </h2>
      <div className="w-36 rounded-lg"></div>
      {!small && (
        <div className="flex flex-row px-3 gap-2 justify-end w-full rounded-lg">
          <h2 className="text-4xl text-yellow-400 font-semibold rounded-lg">
            {name}
          </h2>
          <h2 className="text-4xl text-yellow-400 font-semibold rounded-lg">
            {adjustedTime.toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Timer;
