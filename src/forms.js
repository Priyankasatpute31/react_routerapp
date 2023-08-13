import React from "react"
import { useState } from "react";

function Forms(){

const [name,setname]=useState("");
const [myname,setmyname]=useState();
const onsubmit=(event)=>
{
  event.preventDefault();  //to prevent using default behaviour of forms in react
  setmyname(name);  //to get the value after clicking on button
}
const handleinput=(event)=>{

  let UserName=event.target.value;
  console.log(UserName);
  setname(UserName);
};
return<>
<div>
  <form onSubmit={onsubmit}>
    <h1>Hello {myname}</h1>
  
    <input type="text" value={name} placeholder="name" autoComplete="off"  onChange={handleinput}>
 </input>
 <div>
    <button >click</button>
    </div>
    </form>
</div>
</>
}
export default Forms;