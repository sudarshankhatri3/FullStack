import "../app.css"
import React from "react";
import { useState,createContext } from "react";
import ComponentB from "./componentB";
import ComponentC from "./componentC";

export const UserContext=createContext(null)


export default function ComponentA(){
    const [name,setName]=useState("Sudarshan")
  
    return (
        <>
          <div className="m-5 p-5 border">Hello sudarshan
          
          </div>
          <UserContext.Provider value={name}>
             <ComponentB  user={name}/>
             <componentC user={name}/>
          </UserContext.Provider>
         
        </>
      



    )

}