import React from 'react'
import '../CSSModules/ProjectStyles.css'
import Navbar from '../../Containers/Navbar/Navbar'
import Header from '../../Containers/Header/Header'
import Footer from '../../Containers/Footer/Footer'
import ProjectCards from './Components/ProjectCards'

const Projects = ({projects}) => {
    const {cart} = projects
    
  return (
    <>
      <Navbar cart={cart}/>
      <Header heading="Projects"/>
      <ProjectCards projects={projects}/>
      <Footer/>
    </>
  )
}

export default Projects