import React from 'react'
import logo from '../images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { useState } from 'react'

function Header() {

  const { totalItems, isEmpty, items, removeItem, updateItemQuantity, cartTotal } = useCart()

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive)
  }

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
          <div className='login-container'>
            <span>LOGIN OR REGISTER</span>
            <i className="fa-solid fa-user"></i>
          </div>
          <div className='favourites-container'>
            <i className="fa-regular fa-heart"></i>
            <span>(0)</span>
          </div>
          <div className={`cart-container ${isActive ? 'active' : ''}`}>
            <span onClick={toggleMenu}>CART</span>
            <i onClick={toggleMenu} className="fa-solid fa-cart-shopping"></i>
            <span onClick={toggleMenu}>({totalItems})</span>
            <div className='cart'>
              {isEmpty ? <p>YOUR CART IS EMPTY</p> : <div style={{ display: "block" }}>
                {items.map((item, count) => (
                  <>
                    <div key={item.id} style={{ display: "flex", marginBottom:"10px" }}>
                      <div onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                        <i style={{ display: "block", fontSize: "10px" }} className="fa-solid fa-trash"></i>
                      </div>
                      <div>
                        <div style={{ width: "20%" }} className='img-container'>
                          <img style={{ width: "100%" }} src={item.img1} alt="img" />
                        </div>
                        <p>{item.title}</p>
                      </div>
                      <div>
                        <p>({item.quantity})</p>
                      </div>
                      <div>
                        <p>${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </>
                ))}
                <div>
                  <h5 style={{margin:"0"}}>Subtotal:</h5>
                  <span>${cartTotal}</span>
                </div>
              </div>}
            </div>
          </div>
          <div className='magnifying-glass'>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header