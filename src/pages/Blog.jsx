import blogData from '../data/blog'
import BlogCard from '../components/BlogCard'
import { React, useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { DarkContext } from '../context/DarkContext'

function Blog() {

  const [lang] = useContext(LanguageContext)
  const [mode] = useContext(DarkContext)

  return (
    <section className={`${mode === "dark" ? "dark" : ""}`} id='blog'>
      <div className='blog-container'>
        <div className='sidebar'>
          <div><span>{lang==="EN"?"Ana səhifə / Məqalə":"Home / Blog"}</span></div>
          <div>
            <h2>{lang==="EN"?"KATEQORİYALAR":"CATEGORIES"}</h2>
            <ul>
              <li><a href="#!">{lang==="EN"?"Yaradıcı":"Creative"}</a></li>
              <li><a href="#!">{lang==="EN"?"Şəkil":"Image"}</a></li>
              <li><a href="#!">{lang==="EN"?"Musiqi":"Music"}</a></li>
              <li><a href="#!">{lang==="EN"?"Fotoqrafiya":"Photography"}</a></li>
              <li><a href="#!">{lang==="EN"?"Səyahət":"Travel"}</a></li>
              <li><a href="#!">{lang==="EN"?"Kateqoriyasız":"Uncategorized"}</a></li>
              <li><a href="#!">Wordpress</a></li>
            </ul>
          </div>
          <div>
            <h2>{lang==="EN"?"ARXIV":"ARCHIVES"}</h2>
            <ul>
              <li><a href="#!">{lang==="EN"?"İyun 2017":"June 2017"}</a></li>
              <li><a href="#!">{lang==="EN"?"Yanvar 2017":"January 2017"}</a></li>
              <li><a href="#!">{lang==="EN"?"İyul 2016":"July 2016"}</a></li>
            </ul>
          </div>
          <div>
            <h2>{lang==="EN"?"AXTARIŞ":"SEARCH"}</h2>
            <form action="">
              <input placeholder='Search...' type="text" />
              <button>{lang==="EN"?"AXTARIŞ":"SEARCH"}</button>
            </form>
          </div>
        </div>
        <div className='card-container'>
          {blogData.map(item => (
            <BlogCard alldata={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog