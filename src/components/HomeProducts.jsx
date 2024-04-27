import ShopCard from './ShopCard'
import { React, useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { useState } from 'react'

function HomeProducts() {
    const [product] = useContext(ProductContext)
    const [filterData, setFilterData] = useState([])

    const filterProduct = (cat) => {
        const result = product.filter(p => p.category === cat)
        setFilterData(result)
    }

    return (
        <section id='home-products'>
            <div className="product-container">
                <div className='category'>
                    <ul>
                        <li onClick={()=>{filterProduct('furniture')}}><a href="#!">FURNITURE</a></li>
                        <li onClick={()=>{filterProduct('lighting')}}><a href="#!">LIGHTING</a></li>
                        <li onClick={()=>{filterProduct('sofa')}}><a href="#!">SOFAS</a></li>
                        <li onClick={()=>{filterProduct('all')}}><a href="#!">ALL</a></li>
                    </ul>
                </div>
                <div className='home-card-container'>
                    {filterData.length === 0 ? product.map(item => (
                        <ShopCard key={item.id} alldata={item} />
                    )) : filterData.map(item => (
                        <ShopCard key={item.id} alldata={item} />))}
                </div>
            </div>
        </section>
    )
}

export default HomeProducts