import React from "react";
import { useContext } from "react";
import { AppContext } from "./userContext";
import GChild from "./GrandChild";
function Child(){
    const userData = useContext(AppContext);

    return<>
    <h1>{userData.name}{userData.age}</h1>
    <GChild/>
    </>
}
export default Child;