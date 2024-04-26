import React from 'react'
import logo from '../images/logo.png'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <section id='header'>
      <div className='header-container'>
        <div className="navigation">
          <nav>
            <ul>
              <li><NavLink className='anchor' to="/">HOME</NavLink></li>
              <li><NavLink className='anchor' to="/shop">SHOP</NavLink></li>
              <li><NavLink className='anchor' to="/blog">BLOG</NavLink></li>
              <li><NavLink className='anchor' to="/contact">CONTACT US</NavLink></li>
            </ul>
          </nav>
        </div>
        <div className='hamburger-menu'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="icons">
          <div>
            <span>LOGIN OR REGISTER</span>
            <i className="fa-solid fa-user"></i>
          </div>
          <div>
            <i className="fa-regular fa-heart"></i>
            <span>(0)</span>
          </div>
          <div>
            <span>CART</span>
            <i className="fa-solid fa-cart-shopping"></i>
            <span>(0)</span>
          </div>
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header