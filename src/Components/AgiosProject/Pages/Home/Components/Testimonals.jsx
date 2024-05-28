import React from 'react'
import { Link } from 'react-router-dom'
import { IoStarSharp } from "react-icons/io5";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

const Testimonals = () => {
    return (
        <>
            <section className='testimonal-container'>
                <div className='testimonal-content'>
                    <div>
                        <p className='hero-card-para'>Our Testimonials</p>
                        <h1 className='fw-bold'>What They're <span className='d-block'>Talking About</span><span className='d-block'>Agrios</span></h1>
                        <p className='small-para lh-lg pb-4'>There are many variations of passages of <span className='d-block'>available but the majortity have sufferred</span><span className='d-block'>alteration in some form by injected humor or</span><span className='d-block'>random word which don't look even.</span></p>
                        <Link to='#' className='link-styles'>View All Testimonials</Link>
                    </div>
                    <div>
                        <div className='up-arrow'>
                            <FaArrowUpLong style={{ height: '65px', width: '45px' }} />
                        </div>
                        <div className='down-arrow'>
                            <FaArrowDownLong style={{ height: '65px', width: '45px' }} />
                        </div>
                    </div>
                </div>
                <div className='testimonal-card '>
                    <div>
                        <p className='small-para lh-lg pb-4'>There are many variations of passages of available but the <span className='d-block'>majority have suffered alteration in some form by injected</span><span className='d-block'>humor or random word which don't look even.</span></p>
                        <div className='d-flex justify-content-start align-items-center gap-5 flex-wrap'>
                            <h4 className='fw-bold'>Bonnie Tolbert</h4>
                            <div>
                                <IoStarSharp size={25} style={{ color: 'rgba(238, 192, 68, 1)' }} />
                                <IoStarSharp size={25} style={{ color: 'rgba(238, 192, 68, 1)' }} />
                                <IoStarSharp size={25} style={{ color: 'rgba(238, 192, 68, 1)' }} />
                                <IoStarSharp size={25} style={{ color: 'rgba(238, 192, 68, 1)' }} />
                                <IoStarSharp size={25} style={{ color: 'rgba(238, 192, 68, 1)' }} />
                            </div>
                        </div>
                    </div>
                    <div className='testimonal-image'>
                        <div className='dot-circle'>
                            <div className='inner-circle'>

                            </div>
                        </div>
                        <div className='medium-circle'>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonals