import useCounter from "./useCounter";

import React, { useState } from 'react'

const Customhook = () => {
    // const {count,increment,decrement,reset}=useCounter(0);
    const counter1=useCounter(0)
    const counter2=useCounter(10)
    const counter3=useCounter(20)

    
  return (
    <div>
        <h1>{counter1.count}</h1>
        <button onClick={counter1.increment}>INCREMENT</button>
        <button onClick={counter1.decrement}>DECREMENT</button>
        <button onClick={counter1.reset}>RESET</button>
        <h1>{counter2.count}</h1>
        <button onClick={counter2.increment}>INCREMENT</button>
        <button onClick={counter2.decrement}>DECREMENT</button>
        <button onClick={counter2.reset}>RESET</button>
          <h1>{counter3.count}</h1>
        <button onClick={counter3.increment}>INCREMENT</button>
        <button onClick={counter3.decrement}>DECREMENT</button>
        <button onClick={counter3.reset}>RESET</button>
    </div>
  )
}

export default Customhook