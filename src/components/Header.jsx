import React from "react";
import { Link } from "react-router-dom"
import "../components/Header.css"

function Header() {
    return (
        <nav>
            <Link to="/">Главная</Link>
            <Link to="/catalog">Каталог</Link>
            <Link to="/cart">Корзина</Link>
            <Link to="/feedbackform">Обратная связь</Link>
        </nav>
    );
}

export default Header;