import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/style.scss'
import { ProductProvider } from './context/ProductContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>,
)
