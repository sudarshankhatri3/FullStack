import React from "react";
import { useContext } from "react";
import { CounterContext } from "./counter";
import Counter from "./cnt";

export default function FullExmp(){
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