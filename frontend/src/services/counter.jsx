import React from "react";
import { createContext } from "react";
import { useState } from "react";



export  const CounterContext=createContext(null)


export const counterProvider=(props)=>{
    const [count,setCount]=useState(0)
    return <CounterContext.Provider value={count}>
          <h1>Hello</h1>
    </CounterContext.Provider>

}    
