import React, { useState } from 'react'

const TodoList = () => {
    const[todo, setToDo] = useState([]);
    const[inputValue, setInputValue] = useState("");
    const addTodo = () => {
        setToDo([...todo,inputValue]);
    }
    const todoValue = ({target:{value}})=>{
        setInputValue(value);

    }
    console.log(inputValue)
  return (
    <>
    <input type="text" value={inputValue} onChange={todoValue} />
    <button onClick={addTodo}> Add Todo </button>
        <ul>
            {todo.map(todo=>
            <li>{todo}</li>     
                )}
        </ul>
    </>
  )
}

export default TodoList