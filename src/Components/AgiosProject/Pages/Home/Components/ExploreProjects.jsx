import React from 'react'
import image1 from '../../../../../Assets/Agios/projects-img1.png'
import image2 from '../../../../../Assets/Agios/projects-img2.png'
import image3 from '../../../../../Assets/Agios/projects-img3.png'
import image4 from '../../../../../Assets/Agios/projects-img4.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExploreProjects = () => {
  const cardImages = [
    {
      image: image1,
      name: "Easy Harvesting"
    },
    {
      image: image2,
      name: "Agriculture Farming"
    },
    {
      image: image3,
      name: "Ecological Farming"
    },
    {
      image: image4,
      name: "Organic Solutions"
    },
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <section className='projects-container'>
        <div className=' d-flex justify-content-center align-items-center flex-column ' >
          <p className='hero-card-para'>Recently Completed</p>
          <h1 className='fw-bold'>Explore Projects</h1>
        </div>

        <div className='pt-5'>
          <Slider {...settings}>
            {
              cardImages.length > 0 && cardImages.map((item, index) => {
                return (
                  <>
                    <div key={index}>
                      <img src={item.image} alt="" width='100%' height='500px' className='rounded' />
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
                    </div>
                  </>
                )
              })
            }
          </Slider>
        </div>
      </section>
    </>
  )
}

export default ExploreProjects