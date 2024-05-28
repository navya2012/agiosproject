import React from 'react'
import { Link } from 'react-router-dom'

const ServicesSideBar = ({ menuList, handleClick, url }) => {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li><h5 className='fw-bold'>Categories</h5></li>
                    {menuList.map((item, index) => (
                        
                        <li key={index} onClick={() => handleClick(item.menuItem)} className='small-para fs-6'>
                            <Link to={`${url}${item.path}`} className='small-para fs-6'> {item.menuItem}</Link>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default ServicesSideBar
