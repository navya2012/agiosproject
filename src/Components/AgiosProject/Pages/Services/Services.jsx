import React from 'react'
import '../CSSModules/ServicesStyles.css'
import Navbar from '../../Containers/Navbar/Navbar'
import Header from '../../Containers/Header/Header'
import Footer from '../../Containers/Footer/Footer'
import Categories from './Components/Categories'

const Services = ({menuList,url,cart}) => {

  const AccordianItems =[
    {
        title:'World’s hottest destinations for vegans',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vitae repellendus soluta maiores earum molestiae deserunt perspiciatis sit dolores harum.'
    },
    {
        title:'Let’s grow naturaly and live naturaly',
        content:'Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est metus many of  some form.'
    },

    {
        title:'Best vegetables for your healthy hair',
        content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse voluptate, natus, quod asperiores reiciendis, qui similique pariatur voluptas quas cumque illo ex! Vel saepe neque pariatur placeat dolorum vero dignissimos!'
    },
]

  return (
    <>
      <Navbar cart={cart}/>
      <Header heading="Services" />
      <Categories Items={AccordianItems} menuList={menuList} url={url}  />
      <Footer />
    </>
  )
}

export default Services