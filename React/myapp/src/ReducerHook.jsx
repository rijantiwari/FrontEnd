import React, { useReducer } from 'react'

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
    const [state, dispatch] = useReducer(reducer, initialState)

const handleIncrement = () => {
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

    
    
    </>
  )
}

export default ReducerHook