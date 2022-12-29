import React from "react";
import ListComponent from "./ListComponent";
import { useState } from "react";
export const Fruits=() =>{
    const[isAuthenticated, setIsAuthenticated] = useState(true);
    const fruits=[
        {id:1, name:'papaya', },
        {id:2, name:'apple',},
        {id:3, name:"apple",}
    ];
    const handleState=() =>{
        setIsAuthenticated(!isAuthenticated);
    }
    console.log(isAuthenticated,"isauthenticated")
    return <>
    
    {/* <ul> 
    {
    //    fruits.map((fruit)=> (
    //     <ListComponent data={fruit.name} key={fruit.}/>
    //    )) 
    }
    </ul>
   */}
        {isAuthenticated?"Hello" : "Not Authenticated"}
        <button type="button" onClick={handleState}> Change State </button>
    </>;

}