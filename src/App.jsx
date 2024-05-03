import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from './pages/Home'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'
import NoPage from './pages/NoPage'
import Header from './components/Header';
import Footer from './components/Footer';
import Details from './pages/Details';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route element={
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        }>
          <Route path='/' element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/details/:slug" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
