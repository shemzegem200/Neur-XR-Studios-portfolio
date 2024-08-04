import React, {useContext, useEffect} from 'react';
import myimage from '../../images/hardware.png'
import fs_img from '../../images/neurfiresafety.png';
import fs_lower_img from '../../images/fs_lower_img.png';
// import { SlideContext } from '../App';


export default function OurProducts() {
  

  return (
    <div id='fire-safety' className="outer-container">
      <h1 style={{marginTop:'65px'}}>Our Products</h1>
      
      <div className='fs-cont'>
        <div className='fs-cont-left'>
          <div style={{backgroundColor:'#333333', color:'white', height:'35px', width:'120px', borderRadius:'25px', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center'}}>Fire Safety</div>
          <div className='fs-cont-txt'>
            We had pleasure working with a diverse range of clients, including small businesses, startups, and large corporations across various industries. We are proud to have helped these businesses achieve success through our technology solutions.
          </div>
        </div>
        <img 
          src={myimage}
          alt="Fire Safety"
        />
      </div>

      <img className="fir_safety_img" src={fs_img} alt="fire safety demo"/>

      <div className='fs-lower-cont'>

        <div className='fs-lower-cont-txt'>
          <div className='actual-txt-fs'>We have had the pleasure of working with a diverse range of clients, including small businesses, startups, and large corporations across various industries. We are proud to have helped these businesses achieve success through our technology solutions.</div>
          <div></div>
        </div>

        <img src={fs_lower_img} className="fs_lower_img" alt='fs-lower-img'/>
      </div>

    </div>
  );
}