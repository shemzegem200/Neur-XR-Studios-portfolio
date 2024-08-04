import React from 'react';
import myimage1 from '../images/firesafrect.png';
import myimage2 from '../images/labrect.png';
import myimage3 from '../images/constrect.png';
import myimage4 from '../images/kitchenrect.png';



function OurEnvironment() {
    return (
        <div id='our-envir' className="container2">
            <div className="title2">Our Environments</div>
            <div className="image-container2">
                <div className="image-box2">
                    <img src={myimage1} alt="Environment 1" className="image2"/>
                    <div className="text-box2">Web Design & Development</div>
                </div>
                <div className="image-box2">
                    <img src={myimage2} alt="Environment 2" className="image2"/>
                    <div className="text-box2">Mobile App Development</div>
                </div>
                <div className="image-box2">
                    <img src={myimage3} alt="Environment 3" className="image2"/>
                    <div className="text-box2">Software Development</div>
                </div>
                <div className="image-box2">
                    <img src={myimage4} alt="Environment 4" className="image2"/>
                    <div className="text-box2">Digital Marketing</div>
                </div>
            </div>
            <div className="description-box2">
                Our services are tailored to meet the unique needs of each client, ensuring that we deliver effective solutions that help businesses grow.
            </div>
        </div>
    );
}

export default OurEnvironment;
