import React, { useState, useEffect } from "react";
import FeedbackFormPortal from "../components/FeedbackFormPortal";

const App = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const openForm = () => setIsFormOpen(true);
    const closeForm = () => setIsFormOpen(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => { setLoading(false) }, 500);
        return () => clearTimeout(timer);
    }, []);
    if (loading) {
        return <div>Загрузка...</div>;
    }
    return (
        <div>
            <h1>Напишите ваши пожелания!</h1>
            <div>
                <button onClick={openForm}>Открыть форму обратной связи</button>
            </div>
            <FeedbackFormPortal isOpen={isFormOpen} onClose={closeForm}></FeedbackFormPortal>
        </div>
    )
} 

export default App;