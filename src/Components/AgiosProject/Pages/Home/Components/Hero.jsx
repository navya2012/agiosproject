
import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='hero-imageStyle' >
                <div className='hero-content '>
                <h6 className="text-uppercase ">Welcome to agrios farming</h6>
                <p className='hero-heading'>Agriculture & <span className='d-block hero-heading'>Eco Farming</span></p>
                <p className='sub-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<span className='d-block sub-para'>luctus nec ullamcorper mattis, pulvinar dapibus leo.</span></p>
                <button className='btn rounded px-4 py-2' style={{backgroundColor:'rgba(75, 175, 71, 1)', color:'white'}}>Discover More...</button>
                </div>
            </div>

            <div className='hero-card-container '>
                <div className='hero-card'>
                    <p className='hero-card-para pb-3'>Feature 01</p>
                    <h6 className='fw-bold h5'>We're using a <span className='d-block'>new technology</span></h6>
                    <img src={require("../../../../../Assets/Agios/header-card1.png")} width='90px' alt="" />
                </div>
                <div className='hero-card'>
                    <p className='hero-card-para pb-3'>Feature 02</p>
                    <h6 className='fw-bold h5'>Good in smart<span className='d-block'>organic services</span></h6>
                    <img src={require("../../../../../Assets/Agios/header-card2.png")} width='90px' alt="" />
                </div>
                <div className='hero-card'>
                    <p className='hero-card-para pb-3'>Feature 03</p>
                    <h6 className='fw-bold h5'>Reforming<span className='d-block'>in the systems</span></h6>
                    <img src={require("../../../../../Assets/Agios/header-card3.png")} width='90px' alt="" />
                </div>
            </div>
        </>
    ) 
}

export default Hero