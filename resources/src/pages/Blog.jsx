import React from 'react'
import blogData from '../data/blog'
import BlogCard from '../components/BlogCard'

function Blog() {
  return (
    <section id='blog'>
      <div className='blog-container'>
        <div className='sidebar'>
          <div><span>Home / Blog</span></div>
          <div>
            <h2>CATEGORIES</h2>
            <ul>
              <li><a href="#!">Creative</a></li>
              <li><a href="#!">Image</a></li>
              <li><a href="#!">Music</a></li>
              <li><a href="#!">Photography</a></li>
              <li><a href="#!">Travel</a></li>
              <li><a href="#!">Uncategorized</a></li>
              <li><a href="#!">Wordpress</a></li>
            </ul>
          </div>
          <div>
            <h2>ARCHIVES</h2>
            <ul>
              <li><a href="#!">June 2017</a></li>
              <li><a href="#!">January 2017</a></li>
              <li><a href="#!">July 2016</a></li>
            </ul>
          </div>
          <div>
            <h2>SEARCH</h2>
            <form action="">
              <input placeholder='Search...' type="text" />
              <button>SEARCH</button>
            </form>
          </div>
        </div>
        <div className='card-container'>
          {blogData.map(item => (
            <BlogCard alldata={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog