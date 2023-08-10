import react from "react";

import Component from "./Component";
import { useNavigate } from "react-router-dom";


function AboutUs(){
    const navigate =useNavigate();
    const goBack=()=>{
        navigate(-1);
      };
    return <>
  
        <h1>
        AboutUs
        </h1>
        <button onClick={goBack}>Back</button>
    </>
}

export default AboutUs;