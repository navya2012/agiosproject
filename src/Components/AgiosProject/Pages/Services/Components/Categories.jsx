import React,{useState} from 'react'
import ServicesSideBar from './ServicesSideBar';
import ContentDisplay from './ContentDisplay';

const Categories = ({Items,menuList,url}) => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('Agriculture Products');

    const handleClick = (menuItem) => {
        // console.log(menuItem)
        setSelectedMenuItem(menuItem)
    };

   
    return (
        <>
            <div className="categories-container ">
                <div className="row">
                    <div className="sidebar-col">
                        <ServicesSideBar menuList={menuList} handleClick={handleClick} url={url} />
                    </div>
                    <div className="content-col">
                    <div className="content-wrapper">
                        <ContentDisplay selectedMenuItem={selectedMenuItem} Items={Items}/>                  
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories