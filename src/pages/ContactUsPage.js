import React from 'react';
import myimage from '../images/contact.png';



function ContactUsPage() {
    return (
        <div id="contact-us" className="container3">
            <div className="left-half3">
                <div className="text-block3">
                    <h1 className="title3">Not Convinced? Let's Connect..</h1>
                </div>
                <div className="info-block3">
                    <div className="label3">Phone</div>
                    <div className="text-box3">+91-93455-67392</div>
                </div>
                <div className="info-block3">
                    <div className="label3">Email</div>
                    <div className="text-box3">support@neurindustries.com</div>
                </div>
                <div className="info-block3">
                    <div className="label3">Address</div>
                    <div className="text-box3">2nd Floor, Syed Complex, Thiruneermalai Main Rd, Chromepet, Chennai - 600044</div>
                </div>
            </div>
            <div className="right-half3">
                <img src={myimage} alt="Description" className="image3" />
            </div>
        </div>
    );
}

export default ContactUsPage;
