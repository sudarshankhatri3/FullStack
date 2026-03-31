import "../app.css"
import React from "react";
import { useState } from "react";
import ComponentB from "./componentB";
export default function ComponentA(){
    const [name,setName]=useState("Sudarshan")


    return (
        <>
          <div className="m-5 p-5 border">Hello sudarshan
            <ComponentB  user={name}/>
          </div>
         
        </>
      



    )

}