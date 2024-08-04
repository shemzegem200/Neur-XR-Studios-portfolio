import React, {useContext, useEffect} from 'react';
import wat_1 from '../../images/wat_1.png'
import fs_img from '../../images/neurfiresafety.png';
import fs_lower_img from '../../images/fs_lower_img.png';
// import { SlideContext } from '../App';


export default function OurProducts() {
  

  return (
    <div id='work-at-height' className="outer-container">
      <h1 style={{marginTop:'65px'}}>Our Products</h1>
      
      <div className='fs-cont'>
        <div className='fs-cont-left'>
          <div style={{backgroundColor:'#333333', color:'white', height:'35px', width:'150px', borderRadius:'25px', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center'}}>Work At Height</div>
          <div className='fs-cont-txt'>
          We have had the pleasure of working with a diverse range of clients, including small businesses, startups, and large corporations across various industries. We are proud to have helped these businesses achieve success through our technology solutions.
          </div>
        </div>
      </div>

      <img className="wat_safety_img" src={wat_1} alt="work at height demo"/>

      <h1 style={{color:'rgb(111,111,111)', textAlign:'center'}}>No need of Controllers<br/>
Use your Hands to Interact!</h1>
      <div className='wat-lower-cont'>

        <div className='wat-lower-cont-txt'>
        Revolutionize safety protocol with immersive virtual reality experience.
        </div>

      </div>

    </div>
  );
}