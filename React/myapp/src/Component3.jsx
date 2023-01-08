import React from 'react'
import { useContext } from 'react'
import { UserContext } from './ContextHook'

const Component3 = () => {
   const user = useContext(UserContext)
  return (
    <div>
        <h1>Hello {user}</h1>

    </div>
  )
}

export default Component3