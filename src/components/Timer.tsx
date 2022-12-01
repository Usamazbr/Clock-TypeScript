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
        <div className={`flex flex-col mx-auto ${props.name? "p-1 bg-gray-800":""} rounded-lg`}>
            {props.name && <h1 className="text-xl text-green-400 text-right font-semibold rounded-lg">{props.name}</h1>}
                <h2 className={`mx-auto ${props.name? "w-full text-lg text-right":"ml-40 text-xl18"}  text-white font-semibold font-mono rounded-lg`}>
                    {nTime.toLocaleTimeString('en-GB')}
                </h2>
            <div className="w-36 rounded-lg">
            </div>
            {!props.name && <div className="flex flex-row">
                <div className="w-1/2 rounded-lg"></div>
                <h2 className="ml-48 text-4xl text-yellow-400 font-semibold rounded-lg">
                    {nTime.toLocaleDateString("en-GB", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </h2>
            </div>}
        </div>
    );
}
 
export default Timer;