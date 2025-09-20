import React, { useState, useRef } from "react";

const Stopwatch = () => {
  const watchRef = useRef(null);
  const [time, setTime] = useState(0);

  function handleStart() {
    watchRef.current= setInterval(() => {
        setTime((prevTime)=>(prevTime+1))
    },1000);

  }

  function handleStop() {
    clearInterval(watchRef.current)
    watchRef.current=null

  }

  function handleReset() {
    stop()
    setTime(0);


  }


  return (
    <div>
      <h1>{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
