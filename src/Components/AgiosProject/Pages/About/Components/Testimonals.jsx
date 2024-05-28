import React from 'react'
import { FaCircle } from "react-icons/fa";

const Testimonals = () => {
    return (
        <section className='about-testimonals'>
            <div className='about-testimonals-content'>
                <p className='hero-card-para'>Our Testimonials</p>
                <h2 className='fw-bold '>What They Say</h2>

                <div className='about-testimonals-card-container'>
                    <FaCircle size={50} style={{color:'rgba(75, 175, 71, 1'}}  className='circle-icon' />
                    <img src={require('../../../../../Assets/Agios/about-card1.png')} width='150px' className='card-image rounded' alt="" />
                    <div className='about-testimonals-cards'>
                        <p className='small-para lh-lg'>There are many variations of passage of <span className='d-block'>available but the majority have suffered</span><span className='d-block'>alteration in some form by injected</span><span className='d-block'>humor or randomed.</span></p>
                        <div className='float-end'>
                            <h5 className='fw-bold pt-2'>Bonnie Tolbet</h5>
                            <p className='small-para'>Customer</p>
                        </div>
                    </div>

                    <FaCircle size={50} style={{color:'rgba(75, 175, 71, 1'}} className='circle-icon2' />
                    <img src={require('../../../../../Assets/Agios/about-card2.png')} width='150px' className='card-image2 rounded' alt="" />
                    <div className='about-testimonals-cards'>
                        <p className='small-para lh-lg'>There are many variations of passage of <span className='d-block'>available but the majority have suffered</span><span className='d-block'>alteration in some form by injected</span><span className='d-block'>humor or randomed.</span></p>
                        <div className='float-end'>
                            <h5 className='fw-bold pt-2'>Bonnie Tolbet</h5>
                            <p className='small-para'>Customer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonals