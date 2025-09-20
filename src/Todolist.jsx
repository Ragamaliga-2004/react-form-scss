import React, { useState } from 'react'
import { useReducer } from 'react'


//initializing the states
const initialState={
    item:[],
    count:0                         
}

//To define reducer function
function reducer(state,action) {
    switch(action.type){
        case "addItem":
            if(!action.payload)
                return state;
            return {
                ...state,
                item: [...state.item,action.payload],
                count: state.count+1
            } 
        case "deleteItem":
            return {
                ...state,
                item: state.item.filter(( _ ,index)=>index!==action.payload),
                count: state.count-1
            }
        case "clearItem":

            return {
                ...state,
                item : [],
                count:0
            }
        default:
            return state;
    }

}


const Todolist = () => {
    const [state, dispatch]= useReducer(reducer,initialState)
    const [input, setInput]=useState("")

    function handleAdd() {

        dispatch({
            type:"addItem",
            payload:input

        })
        setInput("")
    }
    function handleChange(e) {
        setInput(e.target.value)

    }
    
    function handleDelete(index) {
        dispatch({
            type:"deleteItem",
            payload:index
        })

    }


  return (
    <div>
        <label>Name : </label>
        <input type="text" placeholder='Enter the Todo item' value={input} onChange={handleChange}/>
        <button onClick={handleAdd}>Add</button>
        <h1>Number of Count: {state.count}</h1>
        
        <ul>
            {state.item.map((i,index)=>(
                <li key={index}>{i}
                <button onClick={()=>{handleDelete(index)}}> ❌ </button >
                </li>
            ))}
        </ul>
        <button onClick={()=>dispatch({type:"clearItem"})}>Clear All ✅</button>

    </div>
  )
}

export default Todolist