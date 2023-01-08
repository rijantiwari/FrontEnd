import React, { memo } from 'react'
import Component2 from './Component2'

const Component1 = ({user}) => {
    console.log("I am Running ")
  return (
    <div>
      Hello {user}    
    </div>
  )
}

export default  memo(Component1);