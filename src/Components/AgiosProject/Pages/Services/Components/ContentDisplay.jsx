import React,{useState} from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ContentDisplay = ({ Items, selectedMenuItem }) => {
 // console.log(Items,selectedMenuItem)

  const [openIndex, setOpenIndex] = useState(1);

  const toggleSection = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  
  return (
    <>
      <section>
        <img src={require('../../../../../Assets/Agios/services-img.png')} width='100%' height='420px' alt="" className='rounded pb-2' />
        <h1 className='fw-bold pb-3'>{selectedMenuItem}</h1>

        <p className='small-para'>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quiaquaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quisenim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s.</p>

        <p className='small-para py-4'>It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting Ipsum take a look at our round. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>

        <div className='d-flex justify-content-start align-items-start gap-2  flex-wrap  pb-3'>
          <div>
            <img src={require("../../../../../Assets/Agios/benefits-img1.png")} className='  rounded' width='100%' alt="" />
            <div>
              <h5 className='fw-bold py-3'>Our Benefits</h5>
              <p className='small-para lh-lg'>It has survived not only five centuries em simply dummy text.<span className='d-block'> Duis aute irure dolor in eprehenderitin </span><span className='d-block'>voluptate velit esse cillum.</span></p>
            </div>
          </div>

          <div>
            <img src={require("../../../../../Assets/Agios/benefits-img2.png")} className='  rounded'  width='100%' alt="" />
            <p className='fw-bold py-3 lh-lg'>Nsectetur cing elit. <span className='d-block'>Suspe ndisse suscipit sagittis leo.</span><span className='d-block'>Entum estibulum dignissim posuere.</span><span className='d-block'>Lorem Ipsum on the tend to repeat.</span></p>
          </div>
        </div>

        <div>
          <div className="accordion">
            {
            Items?.length > 0 && Items.map((item, index) => (
              <div className="accordion-card" key={index}>
                <div
                  className='accordion-card-headings'
                  onClick={() => toggleSection(index)}
                >
                  <h5 className='fw-bold'>{item.title}</h5>
                  {
                     index === openIndex ?  <IoIosArrowUp size={50} className='accordian-icon'  /> : <IoIosArrowDown size={50} className='accordian-icon'/>
                  }
                </div>
                {index === openIndex && (
                  <div className="accordion-card-answers">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>





      </section>
    </>
  )
}

export default ContentDisplay