import React from 'react'

function Carousel({ alldata }) {

    return (
        <div className="carousel-card">
            <div className='img-container'>
                <img src={alldata.img} alt="" />
            </div>
            <div className="text-container">
                <h1 style={{color:"black"}}>{alldata.title}</h1>
            </div>
        </div>
    )
}

export default Carousel