import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

function BlogCard({ alldata }) {

    const [lang] = useContext(LanguageContext)

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
            <a href="#!">{lang === "EN" ? "Daha çox" : "Read more"}</a>
        </div>
    )
}

export default BlogCard