import { BrowserRouter,Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from '../ImpPrograms/ContactUs';
import Home from '../ImpPrograms/Home';
import Error from '../Error';


function Router1() {
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

  export default Router1;