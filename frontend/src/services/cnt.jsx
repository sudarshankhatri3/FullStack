import React from "react";
import { useState } from "react";


export default function Counter(){
    const [count,setcount]=useState(0)

    function increment(){
        setcount(count+1)
    }
    function decrement(){
        setcount(count-1)
    }

    return (
        <>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
        </>
    )
}