import React from 'react';
import ar_med1 from '../../images/ar_med1.png';
import ar_med2 from '../../images/ar_med2.png';
// import EmbedVideo from '../../components/EmbedVideo.js';


function ArMedical() {
  return (
    <div id="ar-medical" className='outer-container'>

        <div className='arm-lower-cont'>
            <div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <h1 style={{ fontSize:'3rem'}}>AR-Medical</h1>
                </div>
                <div style={{backgroundColor:'#333333', color:'white', height:'35px', width:'167px', borderRadius:'25px', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', marginBottom:'20px'}}>About the Project</div>
                <div className='wat-lower-cont-txt'>Innovative Solutions is a cutting-edge technology company that provides innovative solutions for businesses of all sizes. Founded in 2010, we are dedicated to helping our clients achieve their goals through our customized and effective technology solutions. With over a decade of experience, we have built a reputation for delivering high-quality services to our clients.</div> 
            </div>
            <img src={ar_med1} alt='healthcar img' style={{borderRadius:'14px', width:'100%'}}/>
        </div>
        
        <div className='hc-lower-cont'>
            <div>
                <div className='wat-lower-cont-txt'>Innovative Solutions is a cutting-edge technology company that provides innovative solutions for businesses of all sizes. Founded in 2010, we are dedicated to helping our clients achieve their goals through our customized and effective technology solutions. With over a decade of experience, we have built a reputation for delivering high-quality services to our clients.</div>
            </div>
            <img src={ar_med2} alt='healthcar img' style={{borderRadius:'14px', width:'100%'}}/>
        </div>
        {/* <EmbedVideo videoUrl='https://neurindustries.sharepoint.com/sites/NeurXRStudios-SampleWork/_layouts/15/stream.aspx?id=%2Fsites%2FNeurXRStudios%2DSampleWork%2FShared%20Documents%2FDemo%20Works%2FAR%20%28HoloLens%202%29%20%2D%20Medical%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ea289f46f%2D5975%2D4d62%2Dbcb8%2D0e2ba0ebb11b'/> */}
        <a style={{backgroundColor:'#333333',  color:'white', height:'35px', width:'168px', borderRadius:'25px', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', marginBottom:'80px', marginTop:'20px'}} href='https://neurindustries.sharepoint.com/sites/NeurXRStudios-SampleWork/_layouts/15/stream.aspx?id=%2Fsites%2FNeurXRStudios%2DSampleWork%2FShared%20Documents%2FDemo%20Works%2FAR%20%28HoloLens%202%29%20%2D%20Medical%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ea289f46f%2D5975%2D4d62%2Dbcb8%2D0e2ba0ebb11b' target='_blank'>Watch the full video</a>


    </div>
  )
}

export default ArMedical;