import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";



const UseHook=()=>{
    const inputitem=useRef();

    const changeBorder=()=>{
    
    inputitem.current.focus();
    inputitem.current.style.value= "#82E0AA";
    };

    return<>
<input type="text" ref={inputitem}>
    
</input>
<button onClick={changeBorder}>submit</button>
    </>
}

export default UseHook;