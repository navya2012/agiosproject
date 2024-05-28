import React from 'react'
import '../CSSModules/NavbarStyles.css'
import { Link } from 'react-router-dom'
import { FaInstagram, FaPinterestP } from 'react-icons/fa';
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import { GiHamburgerMenu } from 'react-icons/gi';
import { Badge } from '@mui/material';
import { useAuth } from '../Authentication/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ cart }) => {
  //console.log('navbar-cart', cart, cart?.length)

  const imageStyle = {
    backgroundImage: `url(${require("../../../../Assets/Agios/navbar-img.png")})`,
    backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'fixed',
  }

  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/')
  }
  return (
    <>
      <nav className="navbar ">
        <div className="container d-flex justify-content-between align-items-center  px-5">
          <Link className="navbar-brand" href="#"><img src={require("../../../../Assets/Agios/logo.png")} alt="" width='150px' /></Link>

          <div className='nav-icons'>
            <div className='nav-icons d-flex gap-5 justify-content-center align-items-center'>
              <div className='d-flex gap-2 justify-content-center align-items-center'>
                <Link className='nav-icon' to='#' target='_blank' ><FaTwitter /></Link>
                <Link className='nav-icon' to='#' target='_blank'><FaFacebook /></Link>
                <Link className='nav-icon' to='#' target='_blank'><FaPinterestP /></Link>
                <Link className='nav-icon' to='#' target='_blank'><FaInstagram /></Link>
              </div>

              <div className='d-flex gap-3 justify-content-center align-items-center'>
                <FiPhoneCall style={{ color: 'rgba(75, 175, 71, 1)', fontSize: '32px' }} />
                <div >
                  <p className='nav-para'>Call anytime</p>
                  <p className='nav-heading'>+ 98 (000) - 9630</p>
                </div>
              </div>

              <div className='d-flex gap-3 justify-content-center align-items-center'>
                <HiOutlineMailOpen style={{ color: 'rgba(75, 175, 71, 1)', fontSize: '32px' }} />
                <div>
                  <p className='nav-para'>Send email</p>
                  <p className='nav-heading'>ambed@agrios.com</p>
                </div>
              </div>

              <div className='d-flex gap-3 justify-content-center align-items-center'>
                <IoLocationOutline style={{ color: 'rgba(75, 175, 71, 1)', fontSize: '32px' }} />
                <div>
                  <p className='nav-para'>380 St Kilda Road</p>
                  <p className='nav-heading'>Melbourne, Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div style={imageStyle}>
        <div className='container px-5'>
          <nav className='navbar navbar-expand-sm '>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
              <span className="navbar-toggler"><GiHamburgerMenu size={25} /></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className=' navbar-nav me-auto mb-2 mb-lg-0  d-flex gap-3' >

                <li className='nav-item' >
                  <Link className='active' to='/agios/home'>Home</Link>
                </li>
                <li className='nav-item' >
                  <Link to='/agios/about' style={{ color: 'rgba(135, 134, 128, 1)' }}>About</Link>
                </li>
                <li className='nav-item'>
                  <Link style={{ color: 'rgba(135, 134, 128, 1)' }} to='/agios/services'>Services</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/agios/projects' style={{ color: 'rgba(135, 134, 128, 1)' }}>Projects</Link>
                </li>
              </ul>
              <ul className='navbar-nav mb-2 mb-lg-0 d-flex gap-5 py-2'>
                <li className='nav-item'>
                  <Link to='/agios/projects/cart'>
                    <Badge badgeContent={cart?.length} color="success">
                      <BsCartPlus color='action' style={{ color: 'black', fontSize: '26px' }} />
                    </Badge>
                  </Link>
                </li>
                <li className='nav-item'><button className='button-style' onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar