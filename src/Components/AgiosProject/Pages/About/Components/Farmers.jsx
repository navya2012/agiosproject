import React from 'react'
import { ImShare2 } from "react-icons/im";

const Farmers = () => {
    return (
        <>
            <section className='farmers-container'>
                <p className='hero-card-para'>Team Members</p>
                <h2 className='fw-bold '>Meet Our Farmers</h2>

                <div className='farmers-card-container'>
                    <div className='farmer-cards' style={{ backgroundImage: `url(${require("../../../../../Assets/Agios/about-farm-img3.png")})` }}>
                        <div className='farmer-smallCard'>
                            <ImShare2 size={45} style={{ color: 'white', backgroundColor: 'rgba(75, 175, 71, 1)', borderRadius: '10px' }} className='share-icon p-1' />
                            <h5 className='fw-bold float-end'>Kevin Smith</h5>
                            <p className='small-para float-end  '>Farmer</p>
                        </div>
                    </div>

                    <div className='farmer-cards' style={{ backgroundImage: `url(${require("../../../../../Assets/Agios/about-farm-img2.png")})` }}>
                        <div className='farmer-smallCard'>
                            <ImShare2 size={45} style={{ color: 'white', backgroundColor: 'rgba(75, 175, 71, 1)', borderRadius: '10px' }} className='share-icon p-1' />
                            <h5 className='fw-bold float-end'>Jessica Brown</h5>
                            <p className='small-para float-end  '>Farmer</p>
                        </div>
                    </div>

                    <div className='farmer-cards' style={{ backgroundImage: `url(${require("../../../../../Assets/Agios/about-farm-img1.png")})` }}>
                        <div className='farmer-smallCard'>
                            <ImShare2 size={45} style={{ color: 'white', backgroundColor: 'rgba(75, 175, 71, 1)', borderRadius: '10px' }} className='share-icon p-1' />
                            <h5 className='fw-bold float-end'>David Martin</h5>
                            <p className='small-para float-end  '>Farmer</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Farmers