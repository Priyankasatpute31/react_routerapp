import React,{useState,useEffect} from "react";


const ClearUp=()=>
{
    const[widthCount,setWidthCount]=useState(window.screen.width);
    const currentScreenWidth=()=>{setWidthCount(()=>window.innerWidth);};
    useEffect(()=>{window.addEventListener("resize",currentScreenWidth);})
    
  return<>
  <div>

    <h1>
        the size of the window <span> {widthCount} </span>
    </h1>
  </div>


  </>


}

export default ClearUp;