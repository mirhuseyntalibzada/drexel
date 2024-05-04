import React from 'react'
import ShopCard from '../components/ShopCard'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { LanguageContext } from '../context/LanguageContext'
import { DarkContext } from '../context/DarkContext'

function Shop() {


  const [product] = useContext(ProductContext)
  const [lang] = useContext(LanguageContext)
  const [mode] = useContext(DarkContext)

  return (
    <section className={`${mode === "dark" ? "dark" : ""}`} id='shop'>
      <div className="shop-container">
        <div className="sidebar">
          <div><span>{lang==="EN"?"Ana Səhifə /  Mağaza":"Home / Shop"}</span></div>
          <div><h2>{lang==="EN"?"MƏHSUL KATEQORİYALARI":"PRODUCT CATEGORIES"}</h2></div>
          <ul>
            <li><a href="#!">{lang==="EN"?"Aksesuarlar":"Accessories"} (17)</a></li>
            <li><a href="#!">{lang==="EN"?"Qara lampa":"Black Lamp"} (7)</a></li>
            <li><a href="#!">{lang==="EN"?"Dandy Fırçası":"Dandy Brush"} (3)</a></li>
            <li><a href="#!">{lang==="EN"?"Mebel":"Funiture"} (4)</a></li>
            <li><a href="#!">{lang==="EN"?"İşıq":"Light"} (7)</a></li>
            <li><a href="#!">{lang==="EN"?"Kateqoriyasız":"Uncategorized"} (0)</a></li>
          </ul>
          <div>
            <h4>{lang==="EN"?"ÖLÇÜYƏ GÖRƏ FİLTİRLƏMƏ":"FILTER BY SIZE"}</h4>
            <ul>
              <li><a href="#!">L (4)</a></li>
              <li><a href="#!">XL (4)</a></li>
              <li><a href="#!">S (4)</a></li>
              <li><a href="#!">M (4)</a></li>
            </ul>
          </div>
          <div>
            <h4>{lang==="EN"?"Şəkil":"FILTER BY COLOR"}</h4>
            <ul>
              <li><a href="#!">{lang==="EN"?"Mavi":"Blue"} (4)</a></li>
              <li><a href="#!">{lang==="EN"?"Yaşıl":"Green"} (4)</a></li>
              <li><a href="#!">{lang==="EN"?"Ağ":"White"} (4)</a></li>
            </ul>
          </div>
        </div>
        <div className="shop-card-container">
          {product.map(item => (
            <ShopCard key={item.id} alldata={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Shop