import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Components/Routes/AppRoutes";
import { AuthProvider } from './Components/AgiosProject/Containers/Authentication/AuthProvider';
import ScrollToTop from './Components/Routes/ScrollToTop';


function App() {
  const baseURLServices = '/agios/services'

  const menuList = [
    {
      menuItem: 'Agriculture Products',
      path: '/agriculture-products'
    },
    {
      menuItem: 'Organic Products',
      path: '/organic-products'
    },
    {
      menuItem: 'Fresh Vegetables',
      path: '/fresh-vegetables'
    },
    {
      menuItem: 'Dairy Products',
      path: '/dairy-products'
    },
    {
      menuItem: 'Harvest',
      path: '/harvest'
    }

  ]


  const [cart, setCart] = useState([])
  const [cartSelected, setCartSelected] = useState({})

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);


  const handleCart = (item) => {
    console.log(item)
    if (!cartSelected[item.id]) {
      // Update cart state
      const updatedCart = [...cart, item];
      setCart(updatedCart);
      // Update cartSelected state
      const updatedCartSelected = { ...cartSelected, [item.id]: true };
      setCartSelected(updatedCartSelected);

      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };






  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop>
            <AppRoutes menuList={menuList} url={baseURLServices} projects={{ cart, setCart, handleCart, cartSelected, setCartSelected }} />
          </ScrollToTop>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
