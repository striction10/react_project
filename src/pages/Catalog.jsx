import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import supabase from "../supabaseClient";

function Catalog() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const { data, error } = await supabase.from("categories").select("*");
                if (error) {
                    console.error("Ошибка при получении категорий: ", error);
                }
                else {
                    setCategories(data);
                }
            }
            catch (err) {
                console.error("Произошла ошибка: ", err);
            }
            finally {
                setLoading(false);
            }
        }
        fetchCategories().catch((error) => {
            console.error("Необработанная ошибка: ", error);
        });
    }, []);
    if (loading) {
        return <div>Загрузка...</div>
    }
    return (
        <div>
            <h1>Каталог</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Catalog;