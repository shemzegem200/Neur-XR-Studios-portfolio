import React from 'react';
import myimage1 from '../images/constcustom.png';
import myimage2 from '../images/labcustom.png';
import myimage3 from '../images/labcustom2.png';
import myimage4 from '../images/kitchcustom.png';


function Customization() {
    return (
        <div id='customization' className={'container2'}>
            <div className={'title2'}>Customization ?</div>
            <div className={'image-container2'}>
                <div className="image-box2">
                    <img src={myimage1} alt="Environment 1" className={'image2'}/>
                </div>
                <div className="image-box2">
                    <img src={myimage2} alt="Environment 1" className={'image2'}/>
                </div>
                <div className="image-box2">
                    <img src={myimage3} alt="Environment 1" className={'image2'}/>
                </div>
                <div className="image-box2">
                    <img src={myimage4} alt="Environment 1" className={'image2'}/>
                </div>
            </div>
            <div className="description-box2">
                Our services are tailored to meet the unique needs of each client,ensuring that we deliver effective solutions that help buisnesses grow.
            </div>
        </div>
    );
}
export default Customization;