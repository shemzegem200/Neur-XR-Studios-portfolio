import React from 'react'
import hc_1 from '../../images/hc_1.png';
import hc_client from '../../images/hc_clie.png';
import hc_found from '../../images/hc_found.png';
import hc_comp from '../../images/hc_comp.avif';
import hc_5star from '../../images/hc_5star.png';

function Healthcare() {
  return (
    <div id="healthcare" className='outer-container'>
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px'}}>
            <h1>Healthcare</h1>
            <svg width="200" height="173" viewBox="0 0 400 346" fill="none" >
            <path d="M0 -72H400V316C400 332.569 386.569 346 370 346H30C13.4315 346 0 332.569 0 316V-72Z" fill="#DEDEDE"/>
            <rect x="155" y="52" width="93" height="211" fill="#0D8A1A"/>
            <rect x="96" y="204" width="93" height="211" transform="rotate(-90 96 204)" fill="#0D8A1A"/>
            </svg>
        </div>

        <div className='hc-lower-cont'>
            <img src={hc_1} alt='healthcar img' style={{borderRadius:'14px', width:'100%'}}/>
            <div>
                <div style={{backgroundColor:'#333333', color:'white', height:'35px', width:'167px', borderRadius:'25px', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', marginBottom:'20px', marginTop:'20px'}}>About the Project</div>
                <div className='wat-lower-cont-txt'>Innovative Solutions is a cutting-edge technology company that provides innovative solutions for businesses of all sizes. Founded in 2010, we are dedicated to helping our clients achieve their goals through our customized and effective technology solutions. With over a decade of experience, we have built a reputation for delivering high-quality services to our clients.</div>
                
            </div>
            
        </div>

        <div className='hc-grid-container'>
                    <div className='custom-card'>
                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <div>
                                <strong>2022</strong><br/>
                                Founded
                            </div>
                            <img src={hc_found} style={{width:'40px', height:'40px'}}/>
                        </div>
                    </div>
                    <div className='custom-card'>
                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <div>
                                <strong>96</strong><br/>
                                Clients
                            </div>
                            <img src={hc_client} style={{width:'40px', height:'40px'}}/>
                        </div>
                    </div>
                    <div className='custom-card'>
                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <div>
                                <strong>140</strong><br/>
                                Projects Done
                            </div>
                            <img src={hc_comp} style={{width:'40px', height:'40px'}}/>
                        </div>
                    </div>
                    <div className='custom-card'>
                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <div>
                                <strong>61</strong><br/>
                                5-Star Reviews
                            </div>
                            <img src={hc_5star} style={{width:'40px', height:'40px'}}/>
                        </div>
                    </div>
        </div>

    </div>
  )
}

export default Healthcare