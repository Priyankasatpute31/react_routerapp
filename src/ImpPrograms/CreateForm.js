import React, { useState } from "react";


function Form1(){
   let [name,setname]=useState(
    {UserName:"",
    LastName:"",
    PassWord:""});
  const [myname,setmyname]=useState(name);
  
   console.log(name);
    const onsubmit=(event)=>
   {
     event.preventDefault();  //to prevent using default behaviour of forms in react
    
    //to get the value after clicking on button
    const name2={
        UserName:name.UserName,
        LastName:name.LastName,
        PassWord:name.PassWord      
    };
    const name3={
        UserName:'',
        LastName:'',
        PassWord:'' 
    }
    setmyname(name2);
    setname(name3);
}
const createInput=(event)=>
{    const value=event.target.value;
   const name1=event.target.name;
   setname((prev)=>{
 

        return {
         ...prev,[name1]:value


       
    }
   /* else if(name1==="LastName")
    {
        return {
            UserName:prev.UserName,
            LastName:value,
            PassWord:prev.PassWord


        }
    }*/
    

   })
}



return<>
 <form onSubmit={onsubmit}> 
        <div>
            <p> Hello {myname.UserName} {myname.LastName} {myname.PassWord}</p>
            <input type="text" name="UserName" placeholder="name" autoComplete="off" value={name.UserName} onChange={createInput}>
            </input>
            <input type="text" name="LastName" placeholder="name" autoComplete="off" value={name.LastName} onChange={createInput}>
            </input>
            <input type="text" name="PassWord" placeholder="name" autoComplete="off" value={name.PassWord} onChange={createInput}>
            </input>
            <button>Submit</button>
        </div>
        </form>
</>

}
export default Form1;