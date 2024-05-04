import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { DarkContext } from '../context/DarkContext'

function Footer() {

  const [lang] = useContext(LanguageContext)
  const [mode] = useContext(DarkContext)

  return (
    <section className={`${mode === "dark" ? "dark" : ""}`} id='footer'>
      <div className='footer-container'>
        <div className='border'>
          <div className='footer-top-container'>
            <div className='footer-card'>
              <h3>{lang==="EN"?"HAQQINDA":"ABOUT"}</h3>
              <ul>
                <li><a href="#!">{lang==="EN"?"Xəbərlər":"News & Stories"}</a></li>
                <li><a href="#!">{lang==="EN"?"Tarix":"History"}</a></li>
                <li><a href="#!">{lang==="EN"?"Studiomuz":"Our Studio"}</a></li>
                <li><a href="#!">{lang==="EN"?"Salonlar":"Showrooms"}</a></li>
                <li><a href="#!">{lang==="EN"?"Stokçular":"Stockists"}</a></li>
              </ul>
            </div>
            <div className='footer-card'>
              <h3>{lang==="EN"?"MÜŞTƏRİ XİDMƏTLƏRİ":"CUSTOMER SERVICES"}</h3>
              <ul>
                <li><a href="#!">{lang==="EN"?"Əlaqə":"Contact us"}</a></li>
                <li><a href="#!">{lang==="EN"?"Ticarət Xidmətləri":"Trade Services"}</a></li>
                <li><a href="#!">{lang==="EN"?"Giriş/Qeydiyyat":"Login/Register"}</a></li>
                <li><a href="#!">{lang==="EN"?"Çatdırılma və Qaytarma":"Delivery & Returns"}</a></li>
                <li><a href="#!">{lang==="EN"?"F.A.Q.":"F.A.Q.’s"}</a></li>
              </ul>
            </div>
            <div className='footer-card'>
              <h3>{lang==="EN"?"MEBEL":"FURNITURE"}</h3>
              <ul>
                <li><a href="#!">{lang==="EN"?"Masalar":"Tables"}</a></li>
                <li><a href="#!">{lang==="EN"?"Stullar":"Chairs"}</a></li>
                <li><a href="#!">{lang==="EN"?"Saxlama Yeri":"Storage"}</a></li>
              </ul>
            </div>
            <div className='footer-card'>
              <h3>{lang==="EN"?"AKSESUARLAR":"ACCESSORIES"}</h3>
              <ul>
                <li><a href="#!">{lang==="EN"?"Şamlar və Ətir":"Candles & Fragrance"}</a></li>
                <li><a href="#!">{lang==="EN"?"Dəftərxana ləvazimatları":"Stationery"}</a></li>
                <li><a href="#!">{lang==="EN"?"Mətbəx & Yemək":"Kitchen & Dining"}</a></li>
                <li><a href="#!">{lang==="EN"?"Tekstil":"Textiles"}</a></li>
                <li><a href="#!">{lang==="EN"?"Hədiyyə Dəstləri":"Gift Sets"}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom-container">
          <div>
            <a href="#!">{lang==="EN"?"HAQQIMIZDA":"ABOUT US"}</a>
            <a href="#!">{lang==="EN"?"MƏQALƏ":"BLOG"}</a>
            <a href="#!">{lang==="EN"?"F.A.Q.":"F.A.Q.'s"}</a>
            <a href="#!">{lang==="EN"?"SİFARİŞ İZLƏMƏSİ":"ORDER TRACKING"}</a>
            <a href="#!">{lang==="EN"?"BİZİMLƏ ƏLAQƏ SAXLAYIN":"CONTACT US"}</a>
          </div>
          <div>
            <span>{lang==="EN"?"BİZİMLƏ ƏLAQƏ SAXLAYIN":"CONNECT WITH US"}</span>
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