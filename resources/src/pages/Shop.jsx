import React from 'react'
import ShopCard from '../components/ShopCard'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

function Shop() {

  const [product] = useContext(ProductContext)
  
  return (
    <section id='shop'>
      <div className="shop-container">
        <div className="sidebar">
          <div><span>Home / Shop</span></div>
          <div><h2>PRODUCT CATEGORIES</h2></div>
          <ul>
            <li><a href="#!">Accessories (17)</a></li>
            <li><a href="#!">Black Lamp (7)</a></li>
            <li><a href="#!">Dandy Brush (3)</a></li>
            <li><a href="#!">Funiture (4)</a></li>
            <li><a href="#!">Light (7)</a></li>
            <li><a href="#!">Uncategorized (0)</a></li>
          </ul>
          <div>
            <h4>FILTER BY SIZE</h4>
            <ul>
              <li><a href="#!">L (4)</a></li>
              <li><a href="#!">XL (4)</a></li>
              <li><a href="#!">S (4)</a></li>
              <li><a href="#!">M (4)</a></li>
            </ul>
          </div>
          <div>
            <h4>FILTER BY COLOR</h4>
            <ul>
              <li><a href="#!">Blue (4)</a></li>
              <li><a href="#!">Green (4)</a></li>
              <li><a href="#!">White (4)</a></li>
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