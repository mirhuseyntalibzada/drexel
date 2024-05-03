import ShopCard from './ShopCard'
import { React, useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { LanguageContext } from '../context/LanguageContext'

function HomeProducts() {

    const [lang] = useContext(LanguageContext)
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
                        <li onClick={()=>{filterProduct('furniture')}}><a href="#!">{lang==="EN"?"MEBEL":"FURNITURE"}</a></li>
                        <li onClick={()=>{filterProduct('lighting')}}><a href="#!">{lang==="EN"?"İŞIQLANDIRMA":"LIGHTING"}</a></li>
                        <li onClick={()=>{filterProduct('sofa')}}><a href="#!">{lang==="EN"?"DİVANLAR":"SOFAS"}</a></li>
                        <li onClick={()=>{filterProduct('all')}}><a href="#!">{lang==="EN"?"HAMISI":"ALL"}</a></li>
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