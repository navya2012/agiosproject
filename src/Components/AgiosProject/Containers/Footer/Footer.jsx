import React from 'react'
import { FaInstagram, FaLeaf, FaPaperPlane, FaPinterestP } from 'react-icons/fa';
import { FaFacebook, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <>
      <section className='footer-container' style={{ color: 'rgba(165, 164, 154, 1)' }}>
        <div className='top-footer '>
          <div className='flex-column'>
            <div>
              <img src={require("../../../../Assets/Agios/logo.png")} alt="" width='170px' />
              <p className='small-para py-4'>There are many variations of passages <span className='d-block'>of lorem ipsum available, but the</span><span className='d-block'>majority suffered.</span></p>
            </div>
            <div className='d-flex gap-4'>
              <FaTwitter size={20} style={{ color: 'white' }} />
              <FaFacebook size={20} style={{ color: 'white' }} />
              <FaPinterestP size={20} style={{ color: 'white' }} />
              <FaInstagram size={20} style={{ color: 'white' }} />
            </div>
          </div>

          <div className='box'>
            <h5 style={{ color: 'white' }} className='pb-2'>Explore</h5>
            <div className='d-flex pb-3'>
              <div className="line"></div>
              <div className="space"></div>
              <div className="dot"></div>
            </div>
            <div>
              <p> <FaLeaf /><span>About</span></p>
              <p><FaLeaf /><span>Services</span></p>
              <p><FaLeaf /><span>Our Projects</span></p>
              <p><FaLeaf /><span>Meet the Farmers</span></p>
              <p><FaLeaf /><span>Latest News</span></p>
              <p><FaLeaf /><span>Contact</span></p>
            </div>
          </div>

          <div className='box1 '>
            <h5 style={{ color: 'white' }}>News</h5>
            <div className='d-flex pb-3'>
              <div className="line"></div>
              <div className="space"></div>
              <div className="dot"></div>
            </div>
            <div style={{marginLeft:'100px'}}>
              <div>
                <p style={{color:'white'}}>Bringing Food Production <span className='d-block'>Back To Cities</span></p>
                <p style={{color:'rgba(238, 192, 68, 1)'}}>July 5, 2022</p>
              </div>
              <div>
                <p style={{color:'white'}}>The Future of Farming,<span className='d-block'>Smart Irrigation Solutions</span></p>
                <p style={{color:'rgba(238, 192, 68, 1)'}}>July 5, 2022</p>
              </div>
            </div>
          </div>

          <div className='box'>
            <h5 style={{color:'white'}}>Contact</h5>
            <div className='d-flex pb-3'>
              <div className="line"></div>
              <div className="space"></div>
              <div className="dot"></div>
            </div>
            <div>
              <div>
                <p><FiPhoneCall style={{color:'rgba(238, 192, 68, 1)'}} /> <span>666 888 0000</span></p>
                <p><MdEmail style={{color:'rgba(238, 192, 68, 1)'}} /><span>needhelp@company.com</span></p>
                <p><FaLocationDot style={{color:'rgba(238, 192, 68, 1)'}}  /><span  >80 broklyn golden street line <br/> New York, USA</span></p>
                <div className="footer-inputForm">
                  <input  type="email" placeholder="Your email address" name="email" />
                  <button><FaPaperPlane /></button>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <div className='bottom-footer'>
          <div>
            <p>© All Copyright 2024 by shawonetc Themes</p>
          </div>
          <div>
            <p>Terms of Use |  Privacy Policy</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer