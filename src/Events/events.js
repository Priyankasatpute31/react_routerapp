import React, { useState } from "react";
const div1={
    width:"100%",
    height:"100vh",
    background:"#8e44ad",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
}

const button1={
    padding:"12px 20px",
    background:"green",
    color:"white",
    border:"2px solid #ecf0f1",
    outline:"none",
    borderRadius:"5px",
    textTransform:"uppercase",
    cursor:"pointer"

}
const Events=()=>{
    const purple="#8e44ad";
let [color1,setcolor]=useState(purple);

let changeColor=()=>
{
    let newcolor="#34495e";
  setcolor("red");
}
    return<>
    <div style={div1}>
    <button style={{background:color1}} onClick={changeColor}>click</button>
    </div>

    </>
}




export default Events;