import React from 'react'
import './App.css'

import heroImage from './assets/images/img4.jpg'
import order from './assets/images/order.jpeg'
import wait from './assets/images/wait.jpeg'
import enjoy from './assets/images/enjoy.png'

import Hero from './components/Hero'  // Make sure to import the Hero component
import Navbar from './components/Navbar';
import Process from './components/Process';
import Footer from './components/Footer';

const App = () => {
  const cardDate = [{title: "Act",
    description: "Choose the plan that works best for you.",
    imageSrc:order},

    {title: "Await",
    description: "We are selecting the best coffee for you.",
    imageSrc:wait},

    {title: "Enjoy",
      description: "Have coffee delivered right to your doorstep.",
      imageSrc:enjoy},
  
  ]
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
      <Process title={"Our Process" } cardDate={cardDate}/>
      <Footer />
    </>
  );
};

export default App;