import react from "react";
import { NavLink } from "react-router-dom";
import Component from "./Component";
import { useNavigate } from "react-router-dom";

const ContactUs=()=>{
    const navigate =useNavigate();
    const gotoAboutUs=()=>
    {
      navigate("/AboutUs");
    }
     return(
    <>
      <section>
        <h1>
          Contact Page
        </h1>
        <button onClick={gotoAboutUs}>go to AboutUs Page</button>
       
      </section>
    </>
  )
  
  }
export default ContactUs;