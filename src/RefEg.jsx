import React from 'react';
import { useRef } from 'react';

const RefEg = () => {
    const focusRef=useRef(null);

    function handleFocus() {
        if (focusRef.current){
            focusRef.current.focus()
        }
    }

  return (
    <div>
        <label>Name:</label>
        <input type="text" placeholder='Enter Ur Name' ref={focusRef}/> <br />
        <button onClick={handleFocus}>FocusInputField</button>
    </div>
  )
}

export default RefEg