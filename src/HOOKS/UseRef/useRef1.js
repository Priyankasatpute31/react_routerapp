import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Urefhook=()=>
{
   const [userInput,setUserInput]=useState("");
 
    //const [count,setCount]=useState();
const count=useRef(0);
    useEffect(()=>{
      count.current=count.current+1;
    });

    return <>
   <input value={userInput} onChange={(e)=>setUserInput(e.target.value)}></input>
<p> hi {count.current}</p>
    </>

}

export default Urefhook;