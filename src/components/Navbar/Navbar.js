import React from 'react'
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
        <div className="navbar">
            <div className="search">
              <img src="./images/search icon.png" alt="" />
              <input type="text"/>
            </div>
            <ul>
              <li>Categories</li>
              <li>Website Builders</li>
              <li className='padding-left'>Today's deals</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
