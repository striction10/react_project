import React, { Children, createContext, useContext, useState} from "react";
import "./Cart.css"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id == product.id);
        if (existingItem) {
            setCartItems(
                cartItems.map((item) => 
                    item.id == product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        }
        else {
            setCartItems([...cartItems, {...product, quantity: 1}]);
        }
    };
    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id != productId));
    };
    const increaseQuantity = (productId) => {
        setCartItems(cartItems.map((item) => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
    };
    const decreaseQuantity = (productId) => {
        const existingItem = cartItems.find((item) => item.id === productId);
        if (existingItem.quantity > 1) {
            setCartItems(cartItems.map((item) => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item));
        } else {
            removeFromCart(productId);
        }
    };
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

function Cart() {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);

    return (
        <div>
            <h1>Корзина</h1>
            {cartItems.length == 0 ? (
                <p>Корзина пустая</p>
            ) : (
                <ul class="cart-container">
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <img src={item.product_img} width="100px"></img>
                            <h2>{item.name}</h2>
                            <p>{item.price} x {item.quantity}</p>
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            <br></br>
                            <br></br>
                            <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            )}
            <h2>Общая стоимость: {total.toFixed(2)} руб.</h2>
        </div>
    );
}

export default Cart;