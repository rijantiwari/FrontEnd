import React from 'react'
import { useState,useEffect } from 'react';

function EffectHook() {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
      setCount((prevCount) => prevCount + 1)
    }
    // const decreaseCount = () => {
    //   setCount((prevCount) => prevCount - 1)
    // }
    // const restartCount = () => {
    //   setCount(0)
    // }
    useEffect(() => {
        document.title =`I am running ${count} times`
    //   const interval = setInterval(() => {
    //     setCount(count + 1);
    //   }, 1000);
    console.log("I am running");

    },[count]);
  
    return (
      <>
        <div>
          <h1>CounterApp</h1>
          <p>I have rendered {count} times.</p>
          <button className="increaseCount" onClick={increaseCount}>+</button>
          {/* <button className="decreaseCount" onClick={decreaseCount}>-</button><br/><br/>
          <button className="resetCount" onClick={restartCount}>Restart</button> */}
        </div>
      </>
    )
}

export default EffectHook