import { useState } from 'react'
import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from './components/Header'
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Cart, { CartProvider } from "./pages/Cart"
import Autho from "./pages/Autho"
import Register from "./pages/Register"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './components/ThemeContext';

const Catalog = React.lazy(() => import("./pages/Catalog"));
const CategoryProduct = React.lazy(() => import("./pages/CategoryProducts"));
const FeedbackForm = React.lazy(() => import("./pages/Page"));

function App() {
  return (
    <ThemeProvider>
    <CartProvider>
    <Header></Header>
    <Suspense fallback={<div>Загрузка...</div>}> 
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
    </Suspense>
    <Footer></Footer>
    </CartProvider>
    </ThemeProvider>
  )
}

export default App
