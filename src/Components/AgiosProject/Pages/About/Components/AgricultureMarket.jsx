import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheck } from "react-icons/fa";

const AgricultureMarket = () => {
    return (
        <>
            <section className='market-container'>
                <img src={require('../../../../../Assets/Agios/about-img2.png')}className='image-1' alt="" />
                <img src={require('../../../../../Assets/Agios/about-hero-img1.png')}  className='image-2' alt="" />
                <div className='box'></div>

                <div className='market-content'>
                    <p className='hero-card-para'>Get to Know Us</p>
                    <h2 className='fw-bold '>The Best Agriculture <span className='d-block'>Market</span></h2>
                    <p className='small-para py-3 fw-bold' style={{color:'rgba(75, 175, 71, 1)'}}>There are many variations of passa of lorem available, but <span className='d-block'>the majority have suffered alteration.</span></p>
                    <p className='small-para  pt-3 pb-5'>There are many variations of passages of available but the <span className='d-block'>majortity have sufferred alteration in some form by injected</span><span className='d-block'>humor or random word which don't look even.</span></p>
                    <div className='market-card-container pb-5'>
                        <div className='market-card'>
                            <div>
                                <FaCheck size={18} style={{ color: 'rgba(197, 206, 56, 1)' }} />
                            </div>
                            <div>
                                <h5 className='fw-bold'>Suspe ndisse suscipit sagittis leo</h5>                        
                            </div>
                        </div>

                        <div className='market-card'>
                            <div>
                                <FaCheck size={18} style={{ color: 'rgba(197, 206, 56, 1)' }} />
                            </div>
                            <div>
                                <h5 className='fw-bold'>Entum estibulum disgnissim posuere</h5>
                            </div>
                        </div>

                        <div className='market-card'>
                            <div>
                                <FaCheck size={18} style={{ color: 'rgba(197, 206, 56, 1)' }} />
                            </div>
                            <div>
                                <h5 className='fw-bold'>Lorem Ipsum on the tend to repeat</h5>                             
                            </div>
                        </div>
                    </div>
                    <Link to='#' className='link-styles'>Discover More</Link>
                </div>
            </section>
        </>
    )
}

export default AgricultureMarket