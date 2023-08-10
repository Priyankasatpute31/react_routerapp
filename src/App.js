import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Router, Routes, useNavigate, useSearchParams } from 'react-router-dom';
import './App.css';
import AboutUs from './Router/AboutUs';
import Home from './ImpPrograms/Home';
import ContactUs from './ImpPrograms/ContactUs';
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
import P1 from './Practice/P1';
import UseEffect2 from './HOOKS/UseEffect/useEffect2';
import BootstrapPract1 from './Practice/Boostrapprct1';
import Router1 from './Router/Router';
import PokemonFun1 from './ReactPokemonAPI/Pockemon1';

function App() {

  return <>
  <PokemonFun1/></>
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
