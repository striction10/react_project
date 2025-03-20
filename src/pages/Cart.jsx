import React, { Children, createContext, useContext, useState} from "react";

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
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);

    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);

    return (
        <div>
            <h1>Корзина</h1>
            {cartItems.length == 0 ? (
                <p>Корзина пустая</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.prcie} x {item.quantity}</p>
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