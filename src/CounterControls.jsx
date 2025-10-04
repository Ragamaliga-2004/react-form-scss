// import React from 'react'
// import {useCounterContext} from "./CounterContext";

// const CounterControls = () => {
//     const {dispatch} = useCounterContext();

//   return (
//     <div>
//         <button
//         onClick={() =>
//           dispatch({
//             type: "INCREMENT",
//           })
//         }
//       >
//         INCREMENT
//       </button>
//       <button
//         style={{ margin: "10px" }}
//         onClick={() =>
//           dispatch({
//             type: "DECREMENT",
//           })
//         }
//       >
//         DECREMENT
//       </button>
//       <button
//         style={{ margin: "10px" }}
//         onClick={() =>
//           dispatch({
//             type: "RESET",
//           })
//         }
//       >
//         RESET
//       </button>
//     </div>
//   )
// }

// export default CounterControls

import React from 'react'
import { useContext } from 'react';
import { CounterContext } from './CounterContext'


const CounterControls = () => {
  const {increment,decrement,reset}= useContext(CounterContext);

  return (
    <div>
      <button style={{marginRight:'10px',height:'30px', width:'30px'}} onClick={increment}>+</button>
      <button style={{marginRight:'10px',height:'30px', width:'30px'}} onClick={decrement}>-</button>
      <button style={{marginRight:'10px',height:'30px', width:'30px'}} onClick={reset}>➰</button>
    </div>
  )
}

export default CounterControls