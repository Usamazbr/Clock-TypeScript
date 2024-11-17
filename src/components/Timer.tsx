import { useState, useEffect } from "react";
type TimerProps = {
  name: string;
  gmt: number;
  small: boolean;
};

const Timer = ({ name, gmt, small }: TimerProps) => {
  const [nTime, setNTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNTime(() => new Date()), 1_000);

    return () => {
      clearInterval(interval);
    };
  }, [setNTime]);
  console.log(gmt);

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
        {nTime.toLocaleTimeString("en-GB")}
      </h2>
      <div className="w-36 rounded-lg"></div>
      {!small && (
        <div className="flex flex-row px-3 gap-2 justify-end w-fullrounded-lg">
          <h2 className="text-4xl text-yellow-400 font-semibold rounded-lg">
            {name}
          </h2>
          <h2 className="text-4xl text-yellow-400 font-semibold rounded-lg">
            {nTime.toLocaleDateString("en-GB", {
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
