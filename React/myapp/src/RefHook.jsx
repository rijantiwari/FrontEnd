import React from 'react'
import { useState,useRef } from 'react'

function RefHook() {
    const[inputValue, setInputValue] = useState("");
    const inputElement = useRef(0);
    const countRef = useRef(0);
    console.log(countRef, 'countRef');
    const handleIncrement = () =>{
        countRef.current = countRef.current + 1;
        // alert(`you have clicked count ${countRef.current} times`)
        inputElement.current.focus()

    }
    const inputChange = (e) => {
        setInputValue(e.target.value);
    }

  return (
    <>
    <input
     type="text" 
     ref={inputElement}
     value={inputValue}
     onChange={inputChange}
     /> 

     <button onClick={handleIncrement}>Click Me</button>
    </>
  )
}
 
export default RefHook