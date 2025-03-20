import React from "react";
import { Link, useParams } from "react-router-dom"

const products = {
    1: { name: "Собачий корм", description: "Самый вкусный", price: "1200руб."},
    2: { name: "Красный мячик", description: "Игрушка", price: "1500руб."}
};

function Product() {
    const { id } = useParams();
    const product = products[id];

    if (!product) {
        return <h1>Product not found</h1>
    }
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
        </div>
    );
}

export default Product;