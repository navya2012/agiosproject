import React from 'react'
import Navbar from '../../Containers/Navbar/Navbar'
import Footer from '../../Containers/Footer/Footer'
import Header from '../../Containers/Header/Header'
import AgricultureMarket from './Components/AgricultureMarket'
import '../CSSModules/AboutStyles.css'
import Testimonals from './Components/Testimonals'
import Farmers from './Components/Farmers'

const About = ({cart}) => {
  return (
    <>
      <Navbar cart={cart}/>
      <Header heading="About"/>
      <AgricultureMarket/>
      <Testimonals/>
      <Farmers/>
      <Footer/>
    </>
  )
}

export default About