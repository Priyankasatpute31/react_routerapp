import { useEffect, useState } from "react";


function UseEffect1(){
 
const [count,setCount]=useState(10);
console.log(count);
useEffect(()=>{document.title=count;},[count]);
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

export default UseEffect1;




