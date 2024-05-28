import React from 'react'
import { Link } from 'react-router-dom'
import {  FaUserCircle } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";

const Articles = () => {
    return (
        <>
            <section className='articles-container'>
                <p className='hero-card-para'>From the Blog</p>
                <h1 className='fw-bold'>News & Articles</h1>
                <div className='articles-card-container pt-5'>
                <div className="card articles-card" >
                        <img src={require("../../../../../Assets/Agios/articles-img1.png")} className="card-img-top" alt="..." width='300px' height="250px" />
                        <div className="card-body">
                            <Link to='#' className='date-styles'>05 July 2022</Link>
                            <div className='d-flex justify-content-center align-items-center flex-wrap gap-3 pt-1'>
                                <div  className='d-flex justify-content-center align-items-center  gap-2'>
                                <FaUserCircle style={{color:'rgba(238, 192, 68, 1)'}} size={20}/>
                                <p className='small-para'>Kevin Martin</p>
                                </div>
                                <div  className='d-flex justify-content-center align-items-center  gap-2'>
                                <FaComments style={{color:'rgba(238, 192, 68, 1)'}} size={20} />
                                <p className='small-para'>0 Comments</p>
                                </div>
                            </div>
                            <h4 className='fw-bold text-center py-4'>Bringing Food<span className='d-block'>Production Back To</span><span className='d-block'>Cities</span></h4>
                        </div>
                    </div>

                    <div className="card articles-card" >
                        <img src={require("../../../../../Assets/Agios/articles-img2.png")} className="card-img-top" alt="..." width='300px' height="250px" />
                        <div className="card-body">
                            <Link to='#' className='date-styles'>05 July 2022</Link>
                            <div className='d-flex justify-content-center align-items-center flex-wrap gap-3 pt-1'>
                                <div  className='d-flex justify-content-center align-items-center  gap-2'>
                                <FaUserCircle style={{color:'rgba(238, 192, 68, 1)'}} size={20}/>
                                <p className='small-para'>Kevin Martin</p>
                                </div>
                                <div  className='d-flex justify-content-center align-items-center  gap-2'>
                                <FaComments style={{color:'rgba(238, 192, 68, 1)'}} size={20} />
                                <p className='small-para'>0 Comments</p>
                                </div>
                            </div>
                            <h4 className='fw-bold text-center py-4'>The Future of<span className='d-block'>Farming, Smart</span><span className='d-block'>Irrigation Solutions</span></h4>
                        </div>
                    </div>

                    <div className="card articles-card" >
                        <img src={require("../../../../../Assets/Agios/articles-img3.png")} className="card-img-top" alt="..." width='300px' height="250px" />
                        <div className="card-body">
                            <Link to='#' className='date-styles'>05 July 2022</Link>
                            <div className='d-flex justify-content-center align-items-center flex-wrap gap-3 pt-1'>
                                <div  className='d-flex justify-content-center align-items-center  gap-2'>
                                <FaUserCircle style={{color:'rgba(238, 192, 68, 1)'}} size={20}/>
                                <p className='small-para'>Kevin Martin</p>
                                </div>
                                <div  className='d-flex justify-content-center align-items-center  gap-2'>
                                <FaComments style={{color:'rgba(238, 192, 68, 1)'}} size={20} />
                                <p className='small-para'>0 Comments</p>
                                </div>
                            </div>
                            <h4 className='fw-bold text-center py-4'>Agronomy and <span className='d-block'>relation to Other</span><span className='d-block'>Sciences</span></h4>
                        </div>
                    </div>

                </div>
            </section>

            <section className='layout'>

            </section>
        </>
    )
}

export default Articles