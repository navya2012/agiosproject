import React from 'react'
import { FaCheckCircle } from "react-icons/fa";


const ProductFarm = () => {
    return (
        <>
            <section className=' products-container '>
                <div className='farm-images '>
                    <img src={require("../../../../../Assets/Agios/intro-img1.png")} className='large-image' style={{borderRadius:'50%'}} alt="" />
                    <img src={require("../../../../../Assets/Agios/intro-img2.png")}  className='small-image' alt="" />
                </div>

                <div className='farm-content '>
                    <p className='hero-card-para'>Our Introductions</p>
                    <h2 className='fw-bold pb-3'>Agriculture & Organic <span className='d-block'>Product Farm</span></h2>
                    <h6 className='fw-bold pb-3' style={{color:'rgba(75, 175, 71, 1)'}}>Agrios is the largest global organic farm.</h6>

                    <p className='pb-3 small-para'>There are many variations of passages of lorem ipsum available but the <span className='d-block'>majority have suffered alteration in some form by injected humor or </span><span className='d-block'>random word which don’t look even.</span></p>

                    <div className='d-flex gap-5 justify-content-start align-items-center pb-4 flex-wrap'>
                        <div className='d-flex gap-2 justify-content-center align-items-center'>
                            <img src={require("../../../../../Assets/Agios/product-img2.png")} alt="" width='60px' />
                            <h5 className='fw-bold' style={{fontSize:'18px'}} >Growing fruits <span className='d-block'>vegetables</span></h5>
                        </div>
                        <div className='d-flex gap-2 justify-content-center align-items-center'>
                        <img src={require("../../../../../Assets/Agios/product-img1.png")} alt="" width='60px' />
                            <h6 className='fw-bold' style={{fontSize:'18px'}}>Tips for ripening <span className='d-block'>your fruits</span></h6>
                        </div>
                    </div>

                    <div className='d-flex flex-column gap-3 justify-content-center align-items-start pb-4'>
                        <div className='d-flex gap-2 justify-content-center align-items-start'>
                        <FaCheckCircle style={{color:'rgba(197, 206, 56, 1)', fontSize:'18px'}} />
                            <h5 className='fw-bold' style={{fontSize:'16px'}}>Lorem Ipsum is not simply random text.</h5>
                        </div>
                        <div className='d-flex gap-2 justify-content-center align-items-start'>
                        <FaCheckCircle style={{color:'rgba(197, 206, 56, 1)', fontSize:'18px'}} />
                        <h5 className='fw-bold' style={{fontSize:'16px'}}>Making this the first true generator on the internet.</h5>
                        </div>
                    </div>

                    <button className='btn rounded px-4 py-2' style={{backgroundColor:'rgba(75, 175, 71, 1)', color:'white'}}>Discover More...</button>

                </div>
            </section>  
        </>
    )
}

export default ProductFarm