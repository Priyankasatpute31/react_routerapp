import logo from './logo.svg';
import { BrowserRouter, Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';
import './App.css';
import AboutUs from './AboutUs';
import Home from './Home';
import ContactUs from './ContactUs';
import Error from './Error';
import { useState } from 'react';
import UseState1  from './HOOKS/Usestate/UseState1';
import UseState2 from './HOOKS/Usestate/UseState2';
import UseEffect1 from './HOOKS/UseEffect/UseEffect1';
import ClearUp from './HOOKS/UseEffect/clearUp';
import GParent from './HOOKS/UseContext/GrandParent';
import UseReducerHook from './HOOKS/UseReducer/useReducer1';
import Urefhook from "./HOOKS/UseRef/useRef1"
import UseHook from './HOOKS/UseRef/useref2';
import Events from './Events/events';
import Forms from './forms';
import Form1 from './ImpPrograms/CreateForm';
function App() {

  return <>
  <Form1/></>
}


/*function App() {
  return (
    <>
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}>
<Route path="/AboutUs" element={<AboutUs/>}/>

<Route path='/ContactUs' element={<ContactUs/>}/>
<Route path='*' element={<Error/>}/>
</Route>
</Routes>
</BrowserRouter>
      
    </>
    
  );
}
*/
export default App;
