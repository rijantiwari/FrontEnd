import React, { useReducer, useState } from 'react'
import Component1 from './Component1'

const initialState = {count:0}
const reducer = (state, action )=>{
    console.log(action,'action')
    switch(action.type){
        case"increment":
        return{count: state.count + 1 };
        case"decrement":
        return{count:state.count -1};
        case"reset":
        return{count:0};
        default:
            throw new Error ();
    }
}

const ReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [user, setUser] = useState("Test");

const handleIncrement = () => {
    setUser("Rijan")
    dispatch({type:"increment"});
}
const handleDecrement =() =>{
    dispatch({type:"decrement"});
}
const handleReset =() => {
    dispatch({type:"reset"})
}

  return (
    <>
    Count:{state.count}
    <br/>
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    <button onClick={handleReset}>Reset</button>

    <Component1 user={user} />
    
    </>
  )
}

export default ReducerHook