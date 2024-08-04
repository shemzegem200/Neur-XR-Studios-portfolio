import React from 'react';
import myimage1 from '../images/ourculture.png';

function OurCulture() {
    return (
        <div id="our-culture" className="container">

            <div className="left-half">
                <div className="title-container">
                    <div className="title">Our Culture & Values</div>
                </div>
                <div className="text-boxes-container">
                    <div className="row">
                        <div className="text-box">Innovation</div>
                        <div className="text-box">Reliability</div>
                    </div>
                    <div className="text-box">Customer Satisfaction</div>
                </div>
                <div className="description">
                    Our values are reflected in everything we do, from commitment to staying ahead of the curve with the latest technology to our unwavering dedication to provide excellent customer service.
                </div>
            </div>
            
            <div className="right-half">
                <img src={myimage1} alt="Description" className="image" />
            </div>
        </div>
    );
}

export default OurCulture;
