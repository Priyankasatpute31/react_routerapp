import { useEffect, useState } from "react";


function UseEffect2(){
    const [count,updated]=useState(0);
    const use=useEffect(()=>{document.title=count},[count]);

    return<>
        <h1>my value is</h1>
        <button onClick={()=>{updated(count+1)}}>click</button>
    </>
}
export default UseEffect2;