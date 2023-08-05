import { useReducer } from "react";
import reducer from "./reducer";
let initialvalue=0
function useReducerHook(){
   const[count,dispatch]= useReducer(reducer,initialvalue);
return<>
<button onClick={()=>dispatch({type:"INC"})}>
    plus
</button>
<h1>
{count}
</h1>
<button onClick={()=>dispatch({type:"DEC"})}>
    minus
</button>
</>
}
export default useReducerHook;