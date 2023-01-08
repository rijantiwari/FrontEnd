import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';
import Component1 from './Component1';
export const UserContext = createContext();
const ContextHook = () => {
  const [user, setUser]=useState("Rijan T");
  const handleUser = ({target:{value}})=>{
    setUser(value);
  }
  return (
    <>
    <input 
      type="text"
      onChange={handleUser}
      value={user}
    />
    <UserContext.Provider value = {user}>
    <Component1  />
    </UserContext.Provider>
    </>
  )
}

export default ContextHook