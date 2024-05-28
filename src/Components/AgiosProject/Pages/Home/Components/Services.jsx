import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <>
            <section className='services-container'>
                <div className=' d-flex justify-content-center align-items-center flex-column ' style={{ height: '35vh' }}>
                    <p className='hero-card-para'>Our Services</p>
                    <h1 className='fw-bold'>What We Offer</h1>
                </div>


            </section>
            <div className='services-card-container' >
                <div className='services-card' style={{ backgroundImage: `url(${require("../../../../../Assets/Agios/offer-img1.png")})` }}>
                    <div className='services-innerCard'>
                        <h4 className='fw-bold'>Agriculture <span className='d-block'>Products</span></h4>
                    </div>
                    <div className='services-cardIcon'>
                        <img src={require('../../../../../Assets/Agios/offer-icon1.png')} width='50px' alt="" />
                    </div>
                    <div className='services-button'>
                        <Link to='#' style={{ fontSize: '12px' }}>Read More</Link>
                    </div>
                </div>

                <div className='services-card' style={{ backgroundImage: `url(${require("../../../../../Assets/Agios/offer-img2.png")})` }}>
                    <div className='services-innerCard'>
                        <h4 className='fw-bold'>Organic <span className='d-block'>Products</span></h4>
                    </div>
                    <div className='services-cardIcon'>
                        <img src={require('../../../../../Assets/Agios/offer-icon2.png')} width='50px' alt="" />
                    </div>
                    <div className='services-button'>
                        <Link to='#' style={{ fontSize: '12px' }}>Read More</Link>
                    </div>
                </div>

                <div className='services-card' style={{ backgroundImage: `url(${require("../../../../../Assets/Agios/offer-img3.png")})` }}>
                    <div className='services-innerCard'>
                        <h4 className='fw-bold'>Fresh<span className='d-block'>Vegetables</span></h4>
                    </div>
                    <div className='services-cardIcon'>
                        <img src={require('../../../../../Assets/Agios/offer-icon3.png')} width='50px' alt="" />
                    </div>
                    <div className='services-button'>
                        <Link to='#' style={{ fontSize: '12px' }}>Read More</Link>
                    </div>
                </div>

                <div className='services-card' style={{ backgroundImage: `url(${require("../../../../../Assets/Agios/offer-img4.png")})` }}>
                    <div className='services-innerCard'>
                        <h4 className='fw-bold'>Dairy <span className='d-block'>Products</span></h4>
                    </div>
                    <div className='services-cardIcon'>
                        <img src={require('../../../../../Assets/Agios/offer-icon4.png')} width='50px' alt="" />
                    </div>
                    <div className='services-button'>
                        <Link to='#' style={{ fontSize: '12px' }}>Read More</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services