import React, { useContext, useEffect } from 'react'
import myimage from '../images/prods_bg.webp';
import logo from '../images/logo.png';
// import { SlideContext } from '../App';


function ProductsIntroPage() {
    
    

  return (
    <div className="intropage" id='intro-prod'>

        <div className="intropagepic">
            <img src={myimage} alt="My Image" />

            <div className='outer-text'>
                <div className="intro-text">
                    <img src={logo} alt="Logo" />
                    <div className="intro-title">eur XR Studios</div>
                </div>
                <div className="intro-subtext">
                    <>We offer a plethora of products in a gamut of domains!</><br/>
                    <>View our products below</>
                </div>
            </div>

        </div>

        
    </div>
  )
}

export default ProductsIntroPage