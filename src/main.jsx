import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/style.scss'
import { ProductProvider } from './context/ProductContext.jsx'
import { CartProvider } from 'react-use-cart'
import { LanguageProvider } from './context/LanguageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <LanguageProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </LanguageProvider>
  </CartProvider>
)
