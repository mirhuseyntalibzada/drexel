import React from 'react'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import { useCart } from 'react-use-cart'


function ShopCard({ alldata }) {
  const { addItem } = useCart()



  return (
    <div className='shop-card'>
      <div className="img-container">
        <img src={alldata.img1} alt="" />
        <img className='img-2' src={alldata.img2} alt="" />
        <div className='btn-container'>
          <div className='read-more'>
            <button><Link to={`/details/${slugify(alldata.title)}`}><i className="fa-regular fa-eye"></i></Link></button>
          </div>
          <div className="compare">
            <button><i className="fa-solid fa-scale-balanced"></i></button>
          </div>
          <div className='add-to-cart'>
            <button onClick={() => { addItem(alldata) }}><i className="fa-solid fa-cart-shopping"></i></button>
          </div>
        </div>
      </div>
      <div>
        <h4>{alldata.title}</h4>
        <div>{}</div>
        <span>${alldata.price}</span>
      </div>
    </div>
  )
}

export default ShopCard