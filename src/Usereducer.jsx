import React, { useReducer } from "react";

export const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
}

const Usereducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
          })
        }
      >
        INCREMENT
      </button>
      <button
        style={{ margin: "10px" }}
        onClick={() =>
          dispatch({
            type: "DECREMENT",
          })
        }
      >
        DECREMENT
      </button>
      <button
        style={{ margin: "10px" }}
        onClick={() =>
          dispatch({
            type: "RESET",
          })
        }
      >
        RESET
      </button>
    </div>
  );
};

export default Usereducer;
