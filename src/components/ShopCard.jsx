import React from 'react'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import { useCart } from 'react-use-cart'

function ShopCard({ alldata }) {
  const {addItem} = useCart() 

  return (
    <div className='shop-card'>
      <div className="img-container">
        <img src={alldata.img1} alt="" />
        <img className='img-2' src={alldata.img2} alt="" />
        <div className='read-more'>
          <button><Link to={`/details/${slugify(alldata.title)}`}>READ MORE</Link></button>
        </div>
        <button onClick={()=>{addItem(alldata)}}>Add to Cart</button>
      </div>
      <div>
        <h4>{alldata.title}</h4>
        <span>${alldata.price}</span>
      </div>
    </div>
  )
}

export default ShopCard