import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./Cart";
import supabase from "../supabaseClient";
import "./CategoryProducts.css"

function CategoryProducts() {
    const { id } = useParams();

    const { addToCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const { data, error } = await supabase.from("products").select("*").eq("category_id", id);
                if (error) {
                    console.error("Ошибка при получении товара: ", error);
                }
                else {
                    setProducts(data);
                }
            }
            catch (err) {
                console.error("Произошла ошибка", err);
            }
            finally {
                setLoading(false);
            }
        }
        fetchProducts().catch((error) => {
            console.error("Необработанная ошибка", error);
        });
    }, [id]);
    if (loading) {
        return <div>Загрузка...</div>
    }
    if (!products || products.length == 0) {
        return (
            <h1>Товары не найдены</h1>
        );
    }
    return (
        <div>
            <h1>Товар категорий</h1>
            <div class="cart-category-container">
                {products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <img src={product.product_img} width="100px"></img>
                        <p>{product.description}</p>
                        <p>Цена: {product.price}руб.</p>
                        <div>
                            <button onClick={() => addToCart(product)}>Добавить в корзину</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryProducts;