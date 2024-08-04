import './App.css';
import IntroPage from './pages/IntroPage';
import FireSafety from './pages/products/FireSafety.js';
import NavBar from './pages/NavBar.js';
import WorkAtHeight from './pages/products/WorkAtHeight.js';
import Healthcare from './pages/projects/Healthcare.js';
import ProjectsIntroPage from './pages/ProjectsIntroPage.js';
import AssemblyTraining from './pages/projects/AssemblyTraining.js';
import MachineSetup from './pages/projects/MachineSetup.js';
import ProductsIntroPage from './pages/ProductsIntroPage.js';
import ArDrone from './pages/ar/ArDrone.js';
import React, {createContext, useState} from 'react';
import { Link, scroller  } from 'react-scroll';
import ArSatellite from './pages/ar/ArSatellite.js';
import ArMedical from './pages/ar/ArMedical.js';



import ContactUsPage from './pages/ContactUsPage.js';
import Customization from './pages/Customization.js';
import OurEnvironment from './pages/OurEnvironments.js';
import OurCulture from './pages/OurCulture.js';
import Pharma from './pages/ar/Pharma.js';
import Bike from './pages/ar/Bike.js';

// export const SlideContext = createContext();



function App() {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['intro', 'intro-prod', 'fire-safety', 'work-at-height', 'intro-proj', 'healthcare', 'assembly-training', 'machine-setup']

  const scrollPrev = ()=>{
    if (currentSlide===0) return;
    setCurrentSlide(currentSlide-1);
    scroller.scrollTo(slides[currentSlide], {
      smooth: true,
      duration: 500,
      offset:-45
    });
  }
  const scrollNext = ()=>{
    if (currentSlide===slides.length-1) return;
    setCurrentSlide(currentSlide+1);
    scroller.scrollTo(slides[currentSlide], {
      smooth: true,
      duration: 500,
      offset:-45
    });
  }


  return (
    <>
      <main>
        <NavBar/>
        <IntroPage/>
        <ProductsIntroPage/>
        <FireSafety/>
        <WorkAtHeight/>
        {/* <Customization/> */}
        <ProjectsIntroPage/>
        <Healthcare/>
        <AssemblyTraining/>
        <MachineSetup/>
        <ArDrone/>
        <ArSatellite/>
        <ArMedical/>
        <Pharma/>
        <Bike/>

        <OurCulture/>
        <OurEnvironment/>
        <Customization/>
        <ContactUsPage/>
      </main>
      
      {/* <button className='prev-toggle' onClick={scrollPrev}>
      <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.9997 23.0002C10.5814 23.0002 6.99967 19.4184 6.99967 15.0002C6.99967 10.5819 10.5814 7.00016 14.9997 7.00016C19.4179 7.00016 22.9997 10.5819 22.9997 15.0002C22.9997 19.4184 19.4179 23.0002 14.9997 23.0002ZM13.6663 0.333496H16.333V4.3335H13.6663V0.333496ZM13.6663 25.6668H16.333V29.6668H13.6663V25.6668ZM3.68597 5.57207L5.57158 3.68646L8.40001 6.51488L6.51439 8.4005L3.68597 5.57207ZM21.5993 23.4855L23.485 21.5998L26.3134 24.4283L24.4278 26.3139L21.5993 23.4855ZM24.4278 3.68646L26.3134 5.57207L23.485 8.4005L21.5993 6.51488L24.4278 3.68646ZM6.51439 21.5998L8.40001 23.4855L5.57158 26.3139L3.68597 24.4283L6.51439 21.5998ZM29.6663 13.6668V16.3335H25.6663V13.6668H29.6663ZM4.33301 13.6668V16.3335H0.333008V13.6668H4.33301Z" fill="white"/>
      </svg>
    </button>
    
    {(currentSlide===slides.length-1) &&
      <button className='next-toggle' onClick={scrollNext}>
        <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.9997 23.0002C10.5814 23.0002 6.99967 19.4184 6.99967 15.0002C6.99967 10.5819 10.5814 7.00016 14.9997 7.00016C19.4179 7.00016 22.9997 10.5819 22.9997 15.0002C22.9997 19.4184 19.4179 23.0002 14.9997 23.0002ZM13.6663 0.333496H16.333V4.3335H13.6663V0.333496ZM13.6663 25.6668H16.333V29.6668H13.6663V25.6668ZM3.68597 5.57207L5.57158 3.68646L8.40001 6.51488L6.51439 8.4005L3.68597 5.57207ZM21.5993 23.4855L23.485 21.5998L26.3134 24.4283L24.4278 26.3139L21.5993 23.4855ZM24.4278 3.68646L26.3134 5.57207L23.485 8.4005L21.5993 6.51488L24.4278 3.68646ZM6.51439 21.5998L8.40001 23.4855L5.57158 26.3139L3.68597 24.4283L6.51439 21.5998ZM29.6663 13.6668V16.3335H25.6663V13.6668H29.6663ZM4.33301 13.6668V16.3335H0.333008V13.6668H4.33301Z" fill="white"/>
        </svg>
      </button>
    } */}
    </>
  );
}

export default App;
