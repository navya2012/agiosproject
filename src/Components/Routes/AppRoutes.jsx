import React from 'react'
import { Route, Routes, } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from '../AgiosProject/Pages/Home/Home';
import About from '../AgiosProject/Pages/About/About'
import Services from '../AgiosProject/Pages/Services/Services';
import ContentDisplay from '../AgiosProject/Pages/Services/Components/ContentDisplay';
import Projects from '../AgiosProject/Pages/Projects/Projects'
import Cart from '../AgiosProject/Pages/CartComponent/Cart';
import LoginForm from '../AgiosProject/Containers/Authentication/LoginForm';


const AppRoutes = ({ menuList, url, projects }) => {
  //  console.log(menuList, url,projects)

  const { cart, setCart } = projects

  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path='/' exact element={<LoginForm />} />
          <Route path='/agios/home' exact element={<Home cart={cart} />} />
          <Route path='/agios/about' exact element={<About cart={cart} />} />
          <Route path="/agios/services" element={<Services menuList={menuList} url={url} cart={cart} />}>
            {
              menuList?.length > 0 && menuList.map((item, index) => {
                return (
                  <>
                    <Route key={index} path={`${url}${item.path}`} element={<ContentDisplay />} />
                  </>
                )
              })
            }
          </Route>
          <Route path='/agios/projects' exact element={<Projects projects={projects} />} />
          <Route path='/agios/projects/cart' exact element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </ScrollToTop>
    </>
  )
}

export default AppRoutes