import { React, useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

function ContactUs() {

  const [lang] = useContext(LanguageContext)

  return (
    <section id='contact-us'>
      <div>
        <span>{lang === "EN" ? "Ana Səhifə / Əlaqə" : "Home / Contact us"}</span>
      </div>
      <div className='h1'>
        <h1>{lang === "EN" ? "BİZİMLƏ ƏLAQƏ SAXLAYIN" : "CONTACT US"}</h1>
      </div>
      <div className='maps-container'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.76852987308!2d49.69014857522289!3d40.39473700804758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrxLE!5e0!3m2!1saz!2saz!4v1713230955369!5m2!1saz!2saz"
          height={450} style={{ border: '0', width: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <div className='form-container'>
        <div>
          <h4>{lang === "EN" ? "Əlaqə Məlumatları" : "Contact Details"}</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis sed neque vitae bibendum. Nunc auctor dictum risus,
            a finibus eros iaculis nec. Sed et euismod felis, non euismod est. Maecenas quis nulla ullamcorper, imperdiet lacus et, porta sem.</p>
          <h4>{lang === "EN" ? "OFİS ADRESİ" : "OFFICE ADDRESS"}</h4>
          <p>Maecenas quis nulla ullamcorper</p>
          <h4>{lang === "EN" ? "E-POÇT" : "EMAIL"}</h4>
          <p>lion-themes@gmail.com</p>
          <h4>{lang === "EN" ? "TELEFON NÖMRƏSİ" : "PHONE NUMBER"}</h4>
          <p>025 1234 5678 – 025 1234 5779</p>
          <h4>{lang === "EN" ? "VAXT CƏDVƏLİMİZ" : "TIME HOURS"}</h4>
          <p>{lang === "EN" ? `Bazar ertəsi - Cümə: 10:00-dan 19:00-a qədər
            Şənbə: 10:00-dan 16:00-a qədər
            Bazar: 12:00-dan 16:00-a qədər`: `Monday to Friday: 10am to 7pm
            Saturday: 10am to 4pm
            Sunday: 12am to 4pm`}</p>
        </div>
        <div>
          <h4>{lang === "EN" ? "Şərh yazın" : "Leave A Comments"}</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis sed neque vitae bibendum. Nunc auctor dictum risus, a finibus eros iaculis
            nec. Sed et euismod felis, non euismod est. Maecenas quis nulla ullamcorper, imperdiet lacus et, porta sem.</p>
          <form action="">
            <h5>{lang === "EN" ? "Adınız(məcburi)" : "Your Name(required)"}</h5>
            <input type="text" />
            <h5>{lang === "EN" ? "E-poçtunuz (məcburi)" : "Your Email(required)"}</h5>
            <input type="text" />
            <h5>{lang === "EN" ? "Mövzu" : "Subject"}</h5>
            <input type="text" />
            <h5>{lang === "EN" ? "Mesajınız" : "Your Message"}</h5>
            <textarea name="" id="" cols="30" rows="5"></textarea>
            <div className='btn'><button>{lang === "EN" ? "GÖNDƏR" : "SEND"}</button></div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs