import react from "react";
import Component from "../Router/Component";
import { Outlet } from "react-router-dom";


function Home(){
    return <>
     <Component/>
     <Outlet/>
    </>
}

export default Home;