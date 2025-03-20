import React from "react";
import { useTheme } from "../components/ThemeContext";

function Home() {
    const { theme, toggleTheme} = useTheme();
    const handleLightTheme = () => {
        toggleTheme("light");
    }
    const handleDarkTheme = () => {
        toggleTheme("dark");
    }
    return (
        <div>
            <h1>Добро пожаловать в Pet Shop!</h1>
            <p>Здесь вы найдете всё лучшее для ваших питомцов</p>
            <p>Вы можете выбрать светлую или темную тему!</p>
            <button onClick={handleLightTheme}>Светлая тема</button>
            <button onClick={handleDarkTheme}>Темная тема</button>
        </div>
    );
}

export default Home;