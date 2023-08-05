import { useState } from "react";


function UseState1(){
 
const [count,setCount]=useState(10);
console.log(count);
    return <>
      <button onClick={()=>setCount(count+1)}>
        plus
      </button>
     
      <h1>{count}</h1> 
      <button onClick={()=>{  if(count===0)
      {
        setCount(0)
      }
      else
      {
      setCount(count-1)}}
    }>
        minus
      </button> 
    </>
}

export default UseState1;




