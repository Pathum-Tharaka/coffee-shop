import React from 'react'
import './App.css'
import heroImage from './assets/images/img4.jpg'
import Hero from './components/Hero'  // Make sure to import the Hero component
import Navbar from './components/Navbar';
import Process from './components/Process';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Navbar> 
      
    </Navbar>
      <Hero
        title="HAND-SELECTED COFFEE"
        subtitle="DELIVERED TO YOUR DOOR MONTHLY"
        description="Have a look at our selections"
        btnText="Shop Now"
        bgSrc={heroImage}
      />
      <Process/>
      <Footer />
    </>
  );
};

export default App;