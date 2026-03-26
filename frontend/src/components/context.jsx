import { useContext, createContext, useRef, useState } from "react";

export default function Context() {
  // make the variable for useRef
  const inputRef = useRef(0);
  const [count, SetCount] = useState(1);

  const increment = () => {
    inputRef.current += 1;
    console.log(inputRef);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={() =>{
        if(count%2===0){
          SetCount(count+2)
        }else{
          SetCount(count+1)
        }
      } }>Update{count}</button>
      <button onClick={increment}>Click on ref</button>
    </>
  );
}
