import React from "react";
import { useContext } from "react";
import { CounterContext } from "./counter";
import Counter from "./cnt";

export default function FullExmp(){
    const data=useContext(CounterContext)
    console.log(data)

    return (
        <>
          <h1>count is 0</h1>
          <Counter/>
          <Counter/>
          <Counter/>
           <Counter/>
          <Counter/>
          <Counter/>
        </>
    )
}