import React from 'react'
import { useContext } from 'react'
import { DarkContext } from '../context/DarkContext'
import { LanguageContext } from '../context/LanguageContext'

function NoPage() {

  const [mode] = useContext(DarkContext)
  const [lang] = useContext(LanguageContext)

  return (
    <section className={`${mode === "dark" ? "dark" : ""}`} id='no-page'>
      <div className='container'>
        <h1>404</h1>
        <h2>{lang === "EN" ? "Komponent Tapılmadı" : "Component Not Found"}</h2>
        <h3>{lang === "EN" ? "Halal olsun qaqa" : "Oh My Gosh! You Found It!!!"}</h3>
        <div className='paragraph'>
          <p>{lang === "EN" ? `Axtardığınız səhifə ya köçürülüb ya artıq yoxdur, İstəsəniz ana səhifəyə geri qayıda bilərsiniz.
            Problem davam edərsə, mirhuseyntalibzade2004@gmail.com ünvanına e-poçt göndərin` : `The page are looking for has moved or does not exist anymore, If you like you can return our homepage. 
            If the problem persists, please send us a email to mirhuseyntalibzade2004@gmail.com`}</p>
        </div>
        <div className='buttons'>
          <a href="/">{lang === "EN" ? "ANA SƏHİFƏYƏ QAYIDIN" : "RETURN TO HOME"}</a>
          <a href="/shop">{lang === "EN" ? "ALIŞVERİŞƏ DAVAM EDİN" : "CONTINUE SHOPPING"}</a>
        </div>
      </div>
    </section>
  )
}

export default NoPage