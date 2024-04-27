import React from 'react'

function BlogCard({ alldata }) {
    return (
        <div className='blog-card'>
            <div className="img-container">
                <img src={alldata.img} alt="" />
            </div>
            <div>
                <h2>{alldata.title}</h2>
            </div>
            <div>
                <span>{alldata.date}</span>
                <span> | </span>
                <span>{alldata.author}</span>
            </div>
            <div><p>{alldata.description}</p></div>
            <a href="#!">READ MORE</a>
        </div>
    )
}

export default BlogCard