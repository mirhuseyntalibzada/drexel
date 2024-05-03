import { React, useContext } from 'react';
import carouselData from '../data/carousel';
import Carousel from '../components/Carousel';
import { useState } from 'react';
import HomeProducts from '../components/HomeProducts';
import { LanguageContext } from '../context/LanguageContext'

function Home() {

  const [current, setCurrent] = useState(0)

  const [lang] = useContext(LanguageContext)

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
      <section id='home'>
        <div style={{ position: 'relative' }}>
          <div style={{ transition: ".5s", transform: `translateX(-${current * 100}%)` }} className="carousel-container">
            {carouselData.map(item => (
              <Carousel key={item.id} alldata={item} />
            ))}
          </div>
          <div className="buttons">
            <button onClick={previousSlide}>{lang === "EN" ? "ÖNCƏKİ" : "PREV"}</button>
            <span>|</span>
            <button onClick={nextSlide}>{lang === "EN" ? "SONRAKI" : "NEXT"}</button>
          </div>
        </div>
      </section>
      <HomeProducts />
      <section id='pug-banner'>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }} className="container">
          <div className="img-container">
            <img style={{ width: "100%" }} src="src/images/banner-home1-1024x276.jpg" alt="" />
          </div>
        </div>
      </section>
      <HomeProducts />
    </>
  )
}

export default Home