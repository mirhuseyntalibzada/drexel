import React from 'react'

function NoPage() {
  return (
    <section id='no-page'>
      <div className='container'>
        <h1>404</h1>
        <h2>Component Not Found</h2>
        <h3>Oh My Gosh! You Found It!!!</h3>
        <div className='paragraph'>
          <p>The page are looking for has moved or does not exist anymore, If you like you can return our homepage. 
            If the problem persists, please send us a email to lionthemes88@gmail.com</p>
        </div>
        <div className='buttons'>
          <a href="/">RETURN TO HOME</a>
          <a href="/shop">CONTINUE SHOPPING</a>
        </div>
      </div>
    </section>
  )
}

export default NoPage