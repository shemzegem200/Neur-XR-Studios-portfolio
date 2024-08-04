import React from 'react';
import ar_satellite from '../../images/ar_satellite.png';

function ArSatellite() {
  return (
    <div id="ar-satellite" className='outer-container'>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <h1 style={{marginTop:'60px', fontSize:'3rem'}}>AR-Satellite</h1>
        </div>

        <div className='hc-lower-cont'>
            <div>
                <div style={{backgroundColor:'#333333', color:'white', height:'35px', width:'167px', borderRadius:'25px', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', marginBottom:'20px', marginTop:'20px'}}>About the Project</div>
                <div className='wat-lower-cont-txt'>Innovative Solutions is a cutting-edge technology company that provides innovative solutions for businesses of all sizes. Founded in 2010, we are dedicated to helping our clients achieve their goals through our customized and effective technology solutions. With over a decade of experience, we have built a reputation for delivering high-quality services to our clients.</div> 
            </div>
            <img src={ar_satellite} alt='healthcar img' style={{borderRadius:'14px', width:'100%'}}/>
        </div>
    </div>
  )
}

export default ArSatellite;