import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Discover from '../Discoveer/Discover';
import Service from '../Service/Service';
import SignUp from '../SignUp/SignUp';
import Contact from '../Contact';
import Footer from '../Footer';



const Home=()=> {
  return (
    <>
        <Hero/>
        <About/>
        <Discover/>
        <Service/>
        <SignUp/>
        <Contact/>
        <Footer/>

    </>
  );
}

export default Home;
