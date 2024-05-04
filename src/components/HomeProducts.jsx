import ShopCard from './ShopCard'
import { React, useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { LanguageContext } from '../context/LanguageContext'
import { DarkContext } from '../context/DarkContext'
import { useRef } from 'react'

function HomeProducts() {

    const [lang] = useContext(LanguageContext)
    const [product] = useContext(ProductContext)
    const [mode] = useContext(DarkContext)
    const [filterData, setFilterData] = useState([])

    const filterProduct = (cat) => {
        const result = product.filter(p => p.category === cat)
        setFilterData(result)
    }

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const productContainerRef = useRef();

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - productContainerRef.current.offsetLeft);
        setScrollLeft(productContainerRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - productContainerRef.current.offsetLeft;
        const walk = (x - startX);
        productContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };


    return (
        <section className={`${mode === "dark" ? "dark" : ""}`} id='home-products'>
            <div className="product-container">
                <div className='category'>
                    <ul>
                        <li onClick={() => { filterProduct('furniture') }}><a href="#!">{lang === "EN" ? "MEBEL" : "FURNITURE"}</a></li>
                        <li onClick={() => { filterProduct('lighting') }}><a href="#!">{lang === "EN" ? "İŞIQLANDIRMA" : "LIGHTING"}</a></li>
                        <li onClick={() => { filterProduct('sofa') }}><a href="#!">{lang === "EN" ? "DİVANLAR" : "SOFAS"}</a></li>
                        <li onClick={() => { filterProduct('all') }}><a href="#!">{lang === "EN" ? "HAMISI" : "ALL"}</a></li>
                    </ul>
                </div>
                <div ref={productContainerRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp} className='home-card-container'>
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