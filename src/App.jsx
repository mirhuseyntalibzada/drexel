import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'
import NoPage from './pages/NoPage'
import Header from './components/Header';
import Footer from './components/Footer';
import Details from './pages/Details';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/details/:slug" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
