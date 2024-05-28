import React from 'react'
import '../CSSModules/HomeStyles.css'
import Navbar from '../../Containers/Navbar/Navbar'
import Hero from './Components/Hero'
import ProductFarm from './Components/ProductFarm'
import Services from './Components/Services'
import ExploreProjects from './Components/ExploreProjects'
import Testimonals from './Components/Testimonals'
import Articles from './Components/Articles'
import Footer from '../../Containers/Footer/Footer'
import Benefits from './Components/Benefits'


const Home = ({cart}) => {
  return (
    <>
        <Navbar cart={cart}/>
        <Hero/>
        <ProductFarm/>
        <Services/>
        <ExploreProjects/>
        <Testimonals/>
        <Benefits/>
        <Articles/>
        <Footer/>
    </>
  )
}

export default Home