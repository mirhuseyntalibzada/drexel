import React, { useState, useEffect, useRef } from 'react';
import logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext'
import slugify from "slugify";
import { LanguageContext } from '../context/LanguageContext';

function Header() {
  const { totalItems, isEmpty, items, removeItem, updateItemQuantity, cartTotal, emptyCart } = useCart();

  const [product] = useContext(ProductContext)
  const [lang, setLang] = useContext(LanguageContext)

  const [isActive, setIsActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchText, setSearchText] = useState();

  const cartRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click event target is not within the cart or search container
      if (
        (cartRef.current && !cartRef.current.contains(event.target)) &&
        (searchRef.current && !searchRef.current.contains(event.target))
      ) {
        // Clicked outside the cart and search container, hide them
        setIsActive(false);
        setIsSearchActive(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
    setIsSearchActive(false);
  };

  const toggleSearch = (event) => {
    event.stopPropagation(); // Stop event propagation to prevent closing the container
    setIsSearchActive(!isSearchActive);
    setIsActive(false);
  };

  if (window.location.pathname !== '/login') {
    return (
      <section id='header'>
        <div className='header-container'>
          <div className='navigation'>
            <nav>
              <ul>
                <li>
                  <NavLink className='anchor' to='/'>
                  {lang === "EN" ? "EV" : "HOME"}
                  </NavLink>
                </li>
                <li>
                  <NavLink className='anchor' to='/shop'>
                  {lang === "EN" ? "MAĞAZA" : "SHOP"}
                  </NavLink>
                </li>
                <li>
                  <NavLink className='anchor' to='/blog'>
                  {lang === "EN" ? "BLOQ" : "BLOG"}
                  </NavLink>
                </li>
                <li>
                  <NavLink className='anchor' to='/contact'>
                  {lang === "EN" ? "ƏLAQƏ" : "CONTACT US"}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className='hamburger-menu'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='logo-container'>
            <img src={logo} alt='' />
          </div>
          <div className='icons'>
            <div className='login-container'>
              <span>
                <Link className='anchor' to='/login'>
                {lang === "EN" ? "DAXİL OLUN" : "LOGIN"}
                </Link>
              </span>
              <i className='fa-solid fa-user'></i>
            </div>
            <div className='favourites-container'>
              <i className='fa-regular fa-heart'></i>
              <span>(0)</span>
            </div>
            <div onClick={toggleMenu} className={`cart-container ${isActive ? 'active' : ''}`} ref={cartRef}>
              <span>{lang === "EN" ? "SƏBƏT" : "CART"}</span>
              <i className='fa-solid fa-cart-shopping'></i>
              <span>({totalItems})</span>
              <div className='cart'>
                {isEmpty ? (
                  <p>{lang === "EN" ? "SƏBƏTİNİZ BOŞDUR" : "YOUR CART İS EMPTY"}</p>
                ) : (
                  <div style={{ display: 'block' }}>
                    {items.map((item) => (
                      <div onClick={e => e.stopPropagation()} key={item.id} style={{ display: 'flex', marginBottom: '10px' }}>
                        <div onClick={e => removeItem(item.id)}>
                          <i style={{ display: 'block' }} className='fa-solid fa-trash'></i>
                        </div>
                        <div>
                          <div style={{ width: '20%' }} className='img-container'>
                            <img style={{ width: '100%' }} src={item.img1} alt='img' />
                          </div>
                          <p>{item.title}</p>
                        </div>
                        <div>
                          <p style={{ padding: "0 5px" }} onClick={e => updateItemQuantity(item.id, item.quantity - 1)}>-</p>
                          <p>({item.quantity})</p>
                          <p style={{ padding: "0 5px" }} onClick={e => updateItemQuantity(item.id, item.quantity + 1)}>+</p>
                        </div>
                        <div>
                          <p>${item.price * item.quantity}</p>
                        </div>
                      </div>
                    ))}
                    <div onClick={e => e.stopPropagation()} style={{ display: "flex", justifyContent: "space-between" }} className='subtotal'>
                      <div>
                        <h5 style={{ margin: '0' }}>{lang === "EN" ? "Ümumi:" : "Subtotal:"}</h5>
                        <span>${cartTotal}</span>
                      </div>
                      <div onClick={() => { emptyCart() }}><h5>{lang === "EN" ? "Təmizlə" : "Clear all"}</h5></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div onClick={toggleSearch} className={`magnifying-glass ${isSearchActive ? 'active' : ''}`}>
              <i className='fa-solid fa-magnifying-glass'></i>
              <div ref={searchRef} className='search-container'>
                <form action=''>
                  <input onChange={e => setSearchText(e.target.value)} onClick={e => e.stopPropagation()} placeholder='Search Products...' type='text' />
                </form>
                <div style={{ display: "block", padding: `${!searchText ? "0" : "12px"}`, fontSize: "13px", backgroundColor: "rgb(239, 239, 239)" }}>
                  {!searchText ? '' : product.filter(p => p.title.toLocaleLowerCase().includes(searchText)).map(item => (
                    <Link style={{ textDecoration: "none" }} to={`/details/${slugify(item.title)}`}>
                      <div key={item.id} style={{ marginBottom: '10px' }}>
                        <div style={{ width: '20%' }} className='img-container'>
                          <img style={{ width: '100%' }} src={item.img1} alt='img' />
                        </div>
                        <p style={{ color: "#888" }}>{item.title}</p>
                      </div>
                    </Link>
                  ))}
                  {searchText && product.filter(p => p.title.toLocaleLowerCase().includes(searchText)).length === 0 && (
                    <span style={{ color: "#888" }}>{lang === "EN" ? "Məhsullar tapılmadı!" : "No products found!"}</span>
                  )}
                </div>
              </div>
            </div>
            <div style={{userSelect:"none"}} onClick={() => {
              lang === "EN" ? setLang("AZ") : setLang("EN");
              lang === "EN" ? localStorage.setItem("lang", "AZ") : localStorage.setItem("lang", "EN");
            }}>{lang === "EN" ? "EN" : "AZ"}</div>
          </div>
        </div>
      </section >
    );
  } else {
    return null;
  }
}

export default Header;