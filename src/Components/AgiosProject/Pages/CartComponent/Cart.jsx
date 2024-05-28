import React from 'react'
import Navbar from '../../Containers/Navbar/Navbar'
import Footer from '../../Containers/Footer/Footer'
import CartPage from './CartPage'
import '../CSSModules/ProjectStyles.css'

const Cart = ({cart, setCart}) => {
  return (
    <>
        <Navbar cart={cart}/>
        <CartPage cart={cart} setCart={setCart}/>
        <Footer/>
    </>
  )
}

export default Cart