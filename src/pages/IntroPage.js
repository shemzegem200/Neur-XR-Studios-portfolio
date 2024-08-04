import React, {useContext, useEffect} from 'react'
import myimage from '../images/intropic1.png'
import logo2 from '../images/nuerNBlack.png'
import logo from '../images/logo.png'
import { scroller  } from 'react-scroll';
// import { SlideContext } from '../App'


function IntroPage() {

    const scrollToPrdts = ()=>{
        scroller.scrollTo('intro-prod', {
          smooth: true,
          duration: 500,
          offset:-45,
        });
      }

  return (
    <div className="intropage" id='intro'>

        <div className="intropagepic">
            <img src={myimage} alt="My Image" />

            <div className='outer-text'>
                <div className="intro-text">
                    <img src={logo} alt="Logo" />
                    <div className="intro-title">eur XR Studios</div>
                </div>
                <div className="intro-subtext">
                    Embrace the change with Virtual Reality!
                </div>
                <div onClick={scrollToPrdts} style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}><div style={{height:'40px', fontSize:'1rem', borderRadius:'20px', cursor:'pointer', backgroundColor:'rgba(0,0,0,0.5)', color:'whitesmoke', width:'200px', textAlign:'center', display:'flex', alignItems:'center', justifyContent:'center', marginTop:'30px'}}>Try Out our products!</div></div>
            </div>

        </div>

        
    </div>
  )
}

export default IntroPage