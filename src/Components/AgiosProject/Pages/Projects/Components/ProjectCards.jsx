import React from 'react'
import image1 from '../../../../../Assets/Agios/farming-img1.png'
import image2 from '../../../../../Assets/Agios/farming-img2.png'
import image3 from '../../../../../Assets/Agios/farming-img3.png'
import image4 from '../../../../../Assets/Agios/farming-img4.png'
import image5 from '../../../../../Assets/Agios/farming-img5.png'
import image6 from '../../../../../Assets/Agios/farming-img6.png'


const ProjectCards = ({ projects }) => {
    const { handleCart, } = projects

    const cardImages = [
        {
            id: 1,
            image: image1,
            name: "Easy Harvesting",
            quantity: 1
        },
        {
            id: 2,
            image: image2,
            name: "Agriculture Farming",
            quantity: 1
        },
        {
            id: 3,
            image: image3,
            name: "Ecological Farming",
            quantity: 1
        },
        {
            id: 4,
            image: image4,
            name: "Organic Solutions",
            quantity: 1
        },
        {
            id: 5,
            image: image5,
            name: "Fresh Products",
            quantity: 1
        },
        {
            id: 6,
            image: image6,
            name: "Healthy Food",
            quantity: 1
        },
    ]
    return (
        <>
            <section className='projects-container'>
                <div className='projects-card row'>
                    {
                        cardImages?.length > 0 && cardImages?.map((item, index) => {
                            return (
                                <>
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12" >
                                        <img src={item.image} alt="" width='100%' className='rounded' />
                                        <div className='d-flex justify-content-between flex-wrap gap-3 align-items-center' style={{ paddingRight: '50px' }}>
                                            <div>
                                                {
                                                    item.name.split(' ').map((item, i) => {
                                                        return (
                                                            <>
                                                                <div key={i}>
                                                                    <p className='image-name'>{item}</p>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <button

                                                onClick={() => { handleCart(item) }}
                                                className='button-cart btn image-name'>Add To Cart</button>
                                        </div>

                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default ProjectCards