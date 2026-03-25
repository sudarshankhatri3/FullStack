import { useContext, createContext,useRef,useState } from "react";



export default function Context(){
     

  // make the variable for useRef
  const inputRef=useRef(0)
  const [count,SetCount]=useState(0)

  const increment=()=>{
    inputRef.current+=1;
    console.log(inputRef)
   
  }

  return (
    <>

    <div>{count}</div>
    <button>{SetCount(count+1)}</button>
    <button onClick={increment}>Click on ref</button> 
    </>
  )

}



