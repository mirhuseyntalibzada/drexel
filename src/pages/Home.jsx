import { React, useContext } from 'react';
import carouselData from '../data/carousel';
import Carousel from '../components/Carousel';
import { useState } from 'react';
import HomeProducts from '../components/HomeProducts';
import { LanguageContext } from '../context/LanguageContext'
import { DarkContext } from '../context/DarkContext';

function Home() {

  const [current, setCurrent] = useState(0)

  const [lang] = useContext(LanguageContext)
  const [mode] = useContext(DarkContext)

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(carouselData.length - 1)
    } else {
      setCurrent(current - 1)
    }
  }

  const nextSlide = () => {
    if (current === carouselData.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <>
      <section className={`${mode === "dark" ? "dark" : ""}`} id='home'>
        <div className='home-container'>
          <div style={{ position: 'relative' }}>
            <div style={{ transition: ".5s", transform: `translateX(-${current * 100}%)` }} className="carousel-container">
              {carouselData.map(item => (
                <Carousel key={item.id} alldata={item} />
              ))}
            </div>
            <div className="buttons">
              <button onClick={previousSlide}>{lang === "EN" ? "ÖNCƏKİ" : "PREV"}</button>
              <span style={{color:"black"}}>|</span>
              <button onClick={nextSlide}>{lang === "EN" ? "SONRAKI" : "NEXT"}</button>
            </div>
          </div>
        </div>
      </section>
      <HomeProducts />
      <section className={`${mode === "dark" ? "dark" : ""}`} id='pug-banner'>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }} className="container">
          <div className="img-container">
            <img style={{ width: "100%" }} src="src/images/banner-home1-1024x276.png" alt="" />
          </div>
        </div>
      </section>
      <HomeProducts />
    </>
  )
}

export default Home