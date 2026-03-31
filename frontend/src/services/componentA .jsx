import "../app.css"
import React from "react";
import { useState } from "react";
import ComponentB from "./componentB";
export default function ComponentA(){
    const [name,setName]=useState("Sudarshan")


    return (
        <>
          <div className="m-20 p-20 border">Hello sudarshan
            <ComponentB  user={name}/>
          </div>
         
        </>
      



    )

}