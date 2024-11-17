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
        small
          ? "p-1 px-2 w-32 bg-[#19212c]"
          : "relative justify-end h-4/5 w-full"
      }  rounded-lg`}
    >
      {small && (
        <h1 className="text-xl text-green-400 text-right font-semibold rounded-lg">
          {name}
        </h1>
      )}
      <h2
        className={`${
          small
            ? "w-full text-lg text-right"
            : "absolute -top-20 left-28 text-center text-xl18 h-[87.5%]"
        } text-[#e7e6e2] font-semibold font-mono rounded-lg`}
      >
        {adjustedTime.toLocaleTimeString("en-GB")}
      </h2>
      {!small && (
        <div className="flex flex-row px-3 gap-2 items-center justify-end h-[12.5%] w-full rounded-lg">
          <h2 className="p-1 px-2 text-4xl text-yellow-400 font-semibold bg-stone-800 border-2 border-stone-500 rounded-lg">
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
