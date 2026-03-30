import React from "react";
import { createContext } from "react";



export  const CounterContext=createContext(null)


export const counterProvider=(props)=>{
    return <CounterContext.Provider>
          <h1>Hello</h1>
    </CounterContext.Provider>

}    
