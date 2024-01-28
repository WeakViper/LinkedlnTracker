import React from 'react';
import Navbar from "./Navbar";
import GetStartedButton from './GetStartedButton';
import BackgroundImage from "../assets/BackgroundMain.jpeg"

const LandingPage = () => {
    return (
        <div style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            margin: 0,
            padding: 0,
            height: '100vh',
          }}>
            <div className='LandingPage'>
                <Navbar sticky="top" exact />
                <div className="line-separator my-5"></div>

                {/* Add a div with a large margin-top */}
                <div style={{ marginTop: '550px' }}>
                    <GetStartedButton />
                </div>
                
            </div>
        </div>
    );
}
 
export default LandingPage;

