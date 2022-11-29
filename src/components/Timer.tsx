import { useState, useEffect } from "react";
type TimerProps = {
    name: string,
    gmt: number
}

const Timer = (props:TimerProps) => {
    const [nTime, setNTime] = useState(new Date())
    
    useEffect(() => {
        
      const interval = setInterval(()=>setNTime(() => (new Date())), 1_000)
    
      return () => {
        clearInterval(interval)
      }
    }, [setNTime])

    console.log(props)


    return ( 
        <div className="flex flex-col m-4">
            <h1 className="m-2 mx-auto text-xl text-green-400 font-semibold">{props.name}</h1>
            <div className="flex flex-row">
                <div className="w-1/6"></div>
                <h2 className="m-2 mx-auto text-9xl text-white font-semibold">
                    {nTime.toLocaleTimeString()}
                </h2>
            </div>
            <div className="flex flex-row">
                <h2 className="m-2 mx-auto text-4xl text-yellow-400 font-semibold">
                    {nTime.toLocaleDateString()}
                </h2>
            </div>
        </div>
    );
}
 
export default Timer;