import React from 'react';
import Home from './Components/HomePage/Home';
import About from './Components/About/About';
import Discover from './Components/Discoveer/Discover';
import Service from './Components/Service/Service';
import SignUp from './Components/SignUp/SignUp';
import Contact from './Components/Contact';
 import Error from './Components/Error';
import Navbar from './Components/Navbar/Navbar';

import './App.css';
import './Components/Responsive.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar/>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/discover' element={<Discover/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
          
      </Router>

    </>
  );
}

export default App;
