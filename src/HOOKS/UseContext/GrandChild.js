import React from "react";
import { useContext } from "react";
import { AppContext } from "./userContext";
function GChild(){
    const userData = useContext(AppContext);

    return<>
    <h1>{userData.name}{userData.age}</h1>
    
    </>
}
export default GChild;