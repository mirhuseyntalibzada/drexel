import React from 'react'

function Footer() {
  return (
    <section id='footer'>
      <div className='footer-container'>
        <div className='border'>
          <div className='footer-top-container'>
            <div className='footer-card'>
              <h3>ABOUT</h3>
              <ul>
                <li><a href="#!">News & Stories</a></li>
                <li><a href="#!">History</a></li>
                <li><a href="#!">Our Studio</a></li>
                <li><a href="#!">Showrooms</a></li>
                <li><a href="#!">Stockists</a></li>
              </ul>
            </div>
            <div className='footer-card'>
              <h3>CUSTOMER SERVICES</h3>
              <ul>
                <li><a href="#!">Contact us</a></li>
                <li><a href="#!">Trade Services</a></li>
                <li><a href="#!">Login/Register</a></li>
                <li><a href="#!">Delivery & Returns</a></li>
                <li><a href="#!">F.A.Q.’s</a></li>
              </ul>
            </div>
            <div className='footer-card'>
              <h3>FURNITURE</h3>
              <ul>
                <li><a href="#!">Tables</a></li>
                <li><a href="#!">Chairs</a></li>
                <li><a href="#!">Storage</a></li>
              </ul>
            </div>
            <div className='footer-card'>
              <h3>ACCESSORIES</h3>
              <ul>
                <li><a href="#!">Candles & Fragrance</a></li>
                <li><a href="#!">Stationery</a></li>
                <li><a href="#!">Kitchen & Dining</a></li>
                <li><a href="#!">Textiles</a></li>
                <li><a href="#!">Gifl Sets</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom-container">
          <div>
            <a href="#!">ABOUT US</a>
            <a href="#!">BLOG</a>
            <a href="#!">F.A.Q.'s</a>
            <a href="#!">ORDER TRACKING</a>
            <a href="#!">CONTACT US</a>
          </div>
          <div>
            <span>CONNECT WITH US</span>
            <div>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-google-plus-g"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer