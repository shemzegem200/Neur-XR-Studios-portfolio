import React from 'react'
import ms_1 from '../../images/ms_1.png';
import ms_2 from '../../images/ms_2.png';
import hc_client from '../../images/hc_clie.png';
import hc_found from '../../images/hc_found.png';
import hc_comp from '../../images/hc_comp.avif';
import hc_5star from '../../images/hc_5star.png';

function MachineSetup() {
  return (
    <div id="machine-setup" className='outer-container'>
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px'}}>
            <h1>Machine Setup</h1>
            
            <img src={ms_1} style={{width:'200px', height:'173px', borderRadius:'0 0 9px 9px'}}/>
        </div>

        <div className='hc-lower-cont'>
            <img src={ms_2} alt='healthcar img' style={{borderRadius:'14px', width:'100%'}}/>
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

export default MachineSetup;