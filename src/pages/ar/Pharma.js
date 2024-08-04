import React from 'react';
import myimage1 from '../../images/pharma1.png';
import myimage2 from '../../images/pharma2.png';

function Pharma() {
    return (
        <div id="pharma" className='outer-container'>
            <div className='arm-lower-cont'>
                <img src={myimage1} alt='pharma img' style={{ borderRadius: '14px', width: '100%' }} />
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h1 style={{ fontSize: '3rem' }}>VR-Pharma</h1>
                    </div>
                    <div style={{
                        backgroundColor: '#333333', color: 'white', height: '35px',
                        width: '167px', borderRadius: '25px', display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        textAlign: 'center', marginBottom: '20px'
                    }}>
                        About the Project
                    </div>
                    <div className='wat-lower-cont-txt'>
                    Innovative Solutions is a cutting-edge technology company that provides innovative solutions for businesses of all sizes. Founded in 2010, we are dedicated to helping our clients achieve their goals through our customized and effective technology solutions. With over a decade of experience, we have built a reputation for delivering high-quality services to our clients.

                    </div>
                </div>
            </div>
            <div className='hc-lower-cont'>
                <div className='wat-lower-cont-txt'>
                    Innovative Solutions is a cutting-edge technology company that provides innovative solutions for businesses of all sizes. Founded in 2010, we are dedicated to helping our clients achieve their goals through our customized and effective technology solutions. With over a decade of experience, we have built a reputation for delivering high-quality services to our clients.
                </div>
                <img src={myimage2} alt='pharma img' style={{ borderRadius: '14px', width: '100%'}} />
            </div>
        </div>
    );
}

export default Pharma;