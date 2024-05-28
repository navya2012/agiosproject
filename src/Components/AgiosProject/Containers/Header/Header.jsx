import React from 'react'
import '../CSSModules/HeaderStyles.css'
import { TbSlash } from "react-icons/tb";

const Header = ({heading}) => {
  return (
    <>
        <section className='header-container'>
            <div className='header-content'>
              <div className='heading pb-2'>
                <p>Home</p>
                <span><TbSlash size={18} /></span>
                <p>{heading}</p>
              </div>
              <h1 className='fw-bold' style={{fontSize:'50px'}}>{heading}</h1>
            </div>
        </section>
    </>
  )
}

export default Header