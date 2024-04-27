import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom';
import slugify from "slugify"

function Details() {

  const [products] = useContext(ProductContext)
  const { slug } = useParams();
  const productDetails = products.find(p => slugify(p.title) === slug);

  return (
    <section id='details'>
      <div className='details-container'>
        <div className="img-container">
          <img src={`../${productDetails.img1}`} alt="" />
        </div>
        <div className="text-container">
          <h1>{productDetails.title}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique deserunt placeat, sapiente laudantium temporibus error vel quam perferendis repellendus aperiam repudiandae nemo accusantium saepe vero at molestiae! Impedit, vitae eum?
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima ea doloribus amet explicabo facere sunt saepe ex ab nostrum! Quia esse et similique consequuntur perferendis laborum eligendi eius aut!
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem quam nemo rem vel ipsum accusantium, laboriosam amet praesentium debitis consectetur quasi, blanditiis, eos facilis culpa iusto quaerat earum placeat molestiae?</p>
             <div className='buttons'>
              <span>${productDetails.price}.00</span>
              <button>Add to Cart</button>
             </div>
        </div>
      </div>
    </section>
  )
}

export default Details