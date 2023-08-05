import { useState } from "react"

function UseState2(){
const [FormData,setformData]=useState(

   { UserName:"",
    email:" ",
    password:"",
    confirm_password:""
}

);
const handleinput=(event)=>{
    const UserName=event.target.name;

    const value=event.target.value;
  setformData((prev)=>{
    return {...prev,[UserName]:value}
  })
};
return<>
    
    <div className="container">
    <div className="card">
    <h3 className="card-title text-center">
        Register
    </h3>
        <form>
        <div>
            <input type="text" id="nsme" name="UserName" placeholder="name" autoComplete="off" value={FormData.UserName} onChange={handleinput}/>
            </div>
             <div>
             <input type="email" id="email" name="email" placeholder="Email" autoComplete="off" value={FormData.email} onChange={handleinput}/>
             </div>
             <div>
             <input type="password" id="password" name="password" placeholder="password" autoComplete="off" value={FormData.password} onChange={handleinput}/>
             </div>
             <div>
             <input type="password" id="confirm-password" name="confirm_password" placeholder="confirm-password" autoComplete="off" value={FormData.confirm_password} onChange={handleinput}/>
             </div>
             <div>
                <button >
                create account
                </button>
             </div>
             <div>
               {`Mydata is ${FormData.UserName} and ${FormData.email}`} 
             </div>
        </form>
    </div>
    </div>
</>


}

export default UseState2;