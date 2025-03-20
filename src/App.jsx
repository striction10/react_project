import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Catalog from './pages/Catalog'
import Product from "./pages/Product"
import Cart, { CartProvider } from "./pages/Cart"
import Autho from "./pages/Autho"
import Register from "./pages/Register"
import CategoryProduct from "./pages/CategoryProducts"
import FeedbackForm from "./pages/FeedbackForm"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <ThemeProvider>
    <CartProvider>
    <Header></Header>
    <Routes>
        <Route path="/Catalog" element={<Catalog />}></Route>
        <Route path="/Product/:id" element={<Product />}></Route>
        <Route path="/Category/:id" element={<CategoryProduct />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Autho" element={<Autho />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/FeedbackForm" element={<FeedbackForm />}></Route>
        <Route path="/" element={<Home />}></Route>
    </Routes>
    <Footer></Footer>
    </CartProvider>
    </ThemeProvider>
  )
}

export default App
