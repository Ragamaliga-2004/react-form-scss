import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'

const CounterDisplay = () => {
    const {count} = useContext(CounterContext);
  return (
    <div>
        <h1>Count: {count}</h1>
    </div>
  )
}

export default CounterDisplay