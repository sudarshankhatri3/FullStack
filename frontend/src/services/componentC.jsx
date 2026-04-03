import "../app.css"
import React from "react"
import ComponentD from "./componentD"
import { useContext } from "react"
import { UserContext } from "./componentA "



export default function ComponentC(props){

    const user=useContext(UserContext)

    return (
         <div className="m-5 p-5 border">{`user:${user}`}
         </div>
    )
}