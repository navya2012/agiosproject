import React from 'react'
import { Link } from 'react-router-dom'
import { MdDeleteForever } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from 'react-icons/ti';

const CartPage = ({ cart, setCart }) => {
    console.log(cart)

    const handleIncrement = (index) => {
        const updatedCart = [...cart];
        console.log(updatedCart, 'wwwwwwwwwwwww')
        updatedCart[index].quantity += 1;
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleDecrement = (index) => {
        const updatedCart = [...cart];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    };

    const handleDeleteCartItem = (index) => {
        console.log(index)
        const updatedCart = cart.filter((item, i) => i !== index)
        console.log(updatedCart)
        setCart(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    const tableHeaders = cart.length > 0 ? Object.keys(cart[0]) : [];
    return (
        <>
            <section className='cart-container'>
                <div className='cart-content'>
                    <div className='cart-heading'>
                        <h3 className='fw-bold'>Cart Items</h3>
                        <Link to='/agios/projects' className='cart-button-style'>Go Back</Link>
                    </div>
                    <div className='cart-card-container'>

                        <div>
                            <table class="table table-borderless table-responsive">
                                <thead>
                                    <tr>
                                        {tableHeaders?.length > 0 && tableHeaders.map((header) => (
                                            <th className='table-headers' key={header}>{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody style={{ textAlign: 'center' }}>
                                    {cart?.length > 0 ?
                                        cart.map((card, index) => (
                                            <tr key={card.id} style={{ paddingBottom: '40px' }}>
                                                <td style={{ maxWidth: '300px' }} >{card.id}</td>
                                                <td style={{ maxWidth: '3000px' }} ><img src={card.image} alt="" width='150px' height='80px' /></td>
                                                <td style={{ fontSize: '20px', maxWidth: '2000px' }} >{card.name}</td>
                                                <td style={{ maxWidth: '8000px' }}> <button className='btn' onClick={() => { handleIncrement(index) }}><FaPlus style={{ color: 'green' }} /></button>
                                                    <input type="text" value={card.quantity} readOnly />

                                                    {card.quantity > 1 ? (
                                                        <button className='btn' onClick={() => { handleDecrement(index) }}><TiMinus style={{ color: 'green' }} /></button>
                                                    ) : (
                                                        <button className='btn'><MdDeleteForever onClick={() => { handleDeleteCartItem(index) }} style={{ color: 'red' }} /></button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                        :
                                        <tr>
                                            <td colSpan={4} style={{ textAlign: 'center' }}>No items available in cart</td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default CartPage