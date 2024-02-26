import React from 'react'
import { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = event => {
    event.currentTarget.classList.toggle('fa-xmark');
    let a = document.querySelector(".hambuger_baner");
    let b = document.querySelector(".navList");
    let c = document.querySelector(".navList ul");
    if (toggle === false) {
      a.style.display = 'block';
      b.style.display = 'block';
      c.style.display = 'block';
    }else{
      a.style.display = 'none';
      b.style.display = 'none';
      c.style.display = 'none';
    }
  };



  return (
    <nav>
      <div className='hambuger_baner' ></div>
       
    
        <div className="navbar">
            <div className="search">
              <img src="./images/search icon.png" alt="" />
              <input type="text"/>
            </div>
            <div className="navList">
              <ul>
              <li>Categories</li>
              <li>Website Builders</li>
              <li className='padding-left'>Today's deals</li>
            </ul>
            </div>
<div className="hambuger" onClick={()=> setToggle(!toggle)}>
            <i class="fa-solid fa-bars" onClick={handleClick}></i>
          </div>
          </div>
    </nav>
  )
}

export default Navbar
