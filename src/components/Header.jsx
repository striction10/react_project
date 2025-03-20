import React from "react";
import { Link } from "react-router-dom"

function Header() {
    return (
        <nav>
            <Link to="/">Главная</Link>
            <Link to="/catalog">Каталог</Link>
            <Link to="/cart">Корзина</Link>
        </nav>
    );
}

export default Header;