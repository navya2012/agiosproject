import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Benefits = () => {
    return (
        <>
            <section className='benefits-container'>
                <img src={require('../../../../../Assets/Agios/market-img.png')} alt="" />

                <div >
                    <p className='hero-card-para'>Our Farm Benefits</p>
                    <h2 className='fw-bold '>Why Choose Agrios <span className='d-block'>Market</span></h2>
                    <p className='small-para py-4'>There are many variations of passages of available but the <span className='d-block'>majortity have sufferred alteration in some form by injected</span><span className='d-block'>humor or random word which don't look even.</span></p>
                    <div>
                        <div className='benefits-card'>
                            <div>
                                <FaCheckCircle size={30} style={{ color: 'rgba(75, 175, 71, 1)' }} />
                            </div>
                            <div>
                                <h5 className='fw-bold'>Quality Organic Food</h5>
                                <p className='small-para'>There are variation You need to be sure there is <span className='d-block'>anything hidden in the middle of text.</span></p>
                            </div>
                        </div>

                        <div className='benefits-card'>
                            <div>
                                <FaCheckCircle size={30} style={{ color: 'rgba(197, 206, 56, 1)' }} />
                            </div>
                            <div>
                                <h5 className='fw-bold'>Professional Farmers</h5>
                                <p className='small-para'>There are variation You need to be sure there is <span className='d-block'>anything hidden in the middle of text.</span></p>
                            </div>
                        </div>

                        <div className='benefits-card'>
                            <div>
                                <FaCheckCircle size={30} style={{ color: 'rgba(238, 192, 68, 1)' }} />
                            </div>
                            <div>
                                <h5 className='fw-bold'>Quality Products</h5>
                                <p className='small-para'>There are variation You need to be sure there is <span className='d-block'>anything hidden in the middle of text.</span></p>
                            </div>
                        </div>
                    </div>
                    <Link to='#' className='link-styles'>Discover More</Link>
                </div>
            </section>
        </>
    )
}

export default Benefits