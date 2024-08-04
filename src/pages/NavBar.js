import React, {createContext, useContext, useEffect, useState} from 'react';
import logo from '../images/c.png';
import { Link, scroller  } from 'react-scroll';


function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [projdropdownOpen, setProjDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleDropdown2 = () => {
    setProjDropdownOpen(!projdropdownOpen);
  };
  const toggleDropdown3 = () => {
    setDropdownOpen3(!dropdownOpen3);
  };


  //scroll to intro page when clicked logo
  const scrollToIntro = ()=>{
    scroller.scrollTo('intro', {
      smooth: true,
      duration: 500
    });
  }
  
  const isMobile = windowWidth <= 768;

  return (
    <>
    <header>
        <img src={logo} alt="Nuer" onClick={scrollToIntro}/>
        <nav>
          <Link to="intro" spy={true} smooth={true} duration={500} offset={0}>
            {isMobile?
            <div className='icon-link'>
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.336 2.253a1 1 0 0 1 1.328 0l9 8a1 1 0 0 1-1.328 1.494L20 11.45V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.55l-.336.297a1 1 0 0 1-1.328-1.494l9-8zM6 9.67V19h3v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5h3V9.671l-6-5.333-6 5.333zM13 19v-4h-2v4h2z" fill="grey" stroke="grey" stroke-width="0.5"/></svg>
            </div>
            :
            <>Home</>}
          </Link>                 

          <div
            className="dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <Link
              to="intro-prod"
              spy={true}
              smooth={true}
              duration={500}
              offset={-45}
              className={isMobile? "dropdown-toggle-mobile":"dropdown-toggle"}
            >
              {isMobile? "Products" : "Our Products"}
            </Link>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link
                  to="fire-safety"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-45}
                  className="dropdown-item"
                >
                  Fire Safety
                </Link>
                <Link
                  to="work-at-height"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-45}
                  className="dropdown-item"
                >
                  Work at Height
                </Link>
                <Link
                  to="customization"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-45}
                  className="dropdown-item"
                >
                  Customization
                </Link>
              </div>
            )}
          </div>

          <div
            className="dropdown"
            onMouseEnter={toggleDropdown2}
            onMouseLeave={toggleDropdown2}
          >
            <Link
              to="intro-proj"
              spy={true}
              smooth={true}
              duration={500}
              offset={-45}
              className={isMobile? "dropdown-toggle-mobile":"dropdown-toggle"}
            >
              
              {isMobile? "Projects" : "Our Projects"}
            </Link>
            {projdropdownOpen && (
              <div className="dropdown-menu">
                <Link
                  to="healthcare"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-45}
                  className="dropdown-item"
                >
                  Healthcare
                </Link>
                <Link
                  to="assembly-training"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-45}
                  className="dropdown-item"
                >
                  Assembly Training
                </Link>
                <Link
                  to="machine-setup"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-45}
                  className="dropdown-item"
                >
                  Machine Setup
                </Link>
                <Link
                  to="ar-drone"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-45}
                  className="dropdown-item"
                >
                  AR-Drone
                </Link>
                <Link
                  to="ar-satellite"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-45}
                  className="dropdown-item"
                >
                  AR-Satellite
                </Link>
                <Link
                  to="ar-medical"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-65}
                  className="dropdown-item"
                >
                  AR-Medical
                </Link>
                <Link
                  to="pharma"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-65}
                  className="dropdown-item"
                >
                  VR-Pharma
                </Link>
                <Link
                  to="bike"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-65}
                  className="dropdown-item"
                >
                  VR-Bike Assembly
                </Link>
              </div>
            )}
          </div>
          
          <div
            className="dropdown"
            onMouseEnter={toggleDropdown3}
            onMouseLeave={toggleDropdown3}
          >
            <Link
              to="our-culture"
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
              className={isMobile? "dropdown-toggle-mobile":"dropdown-toggle"}
            >
              
              {isMobile? 
            <svg width="17px" height="17px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="m 8 0 c -4.410156 0 -8 3.589844 -8 8 s 3.589844 8 8 8 s 8 -3.589844 8 -8 s -3.589844 -8 -8 -8 z m 0 2 c 3.332031 0 6 2.667969 6 6 s -2.667969 6 -6 6 s -6 -2.667969 -6 -6 s 2.667969 -6 6 -6 z m 0 1.875 c -0.621094 0 -1.125 0.503906 -1.125 1.125 s 0.503906 1.125 1.125 1.125 s 1.125 -0.503906 1.125 -1.125 s -0.503906 -1.125 -1.125 -1.125 z m -1.523438 3.125 c -0.265624 0.011719 -0.476562 0.230469 -0.476562 0.5 c 0 0.277344 0.222656 0.5 0.5 0.5 h 0.5 v 3 h -0.5 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 3 c 0.277344 0 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 h -0.5 v -4 h -2.5 c -0.007812 0 -0.015625 0 -0.023438 0 z m 0 0" fill="grey" stroke="grey" stroke-width="0.3"/>
            </svg>
            :
            <>About Us</>
            }
            </Link>
            {dropdownOpen3 && (
              <div className="dropdown-menu">
                
                <Link
                  to="our-culture"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={0}
                  className="dropdown-item"
                >
                  Our Culture
                </Link>
                <Link
                  to="our-envir"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-45}
                  className="dropdown-item"
                >
                  Our Environments
                </Link>
                <Link
                  to="customization"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-45}
                  className="dropdown-item"
                >
                  Customization
                </Link>
                
                
              </div>
            )}
          </div>
 
          <Link to="contact-us" spy={true} smooth={true} duration={500} offset={0} className={isMobile? "icon-link": ""}>
            {isMobile?
            <svg 
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="grey"
            stroke-width="2.3"
            stroke-linecap="round"
            stroke-linejoin="round"
            >
            <path d="M19 22H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2z" />
            <line x1="16" y1="2" x2="16" y2="4" />
            <line x1="8" y1="2" x2="8" y2="4" />
            <circle cx="12" cy="11" r="3" />
            <path d="M17 18.5c-1.4-1-3.1-1.5-5-1.5s-3.6.6-5 1.5" />
            </svg>
            :
            <>Contact Us</>
            }
          </Link> 
                    
        </nav>
      </header>

      </>
  )
}

export default NavBar