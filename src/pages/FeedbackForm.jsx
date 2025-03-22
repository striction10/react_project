import { useState } from "react";
import FeedbackFormPortal from "../components/FeedbackFormPortal";
import supabase from "../supabaseClient";
import "../pages/Feedback.css"

const FeedbackForm = ({ onClose }) => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        try {
            const { data, error } = await supabase.from("feedback").insert([{ name, message}]);
            if (error) {
                throw new Error(error.message);
            }
            alert(`Спасибо, ${name}! Ваше сообщение отправлено!`);
            onClose();
        }
        catch (err) {
            setError(err.message);
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div class="main-form">
            <div>
                <h2>Форма обратной связи</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Имя</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required></input>
                    </div>
                    <div>
                        <label>Сообщение</label>
                        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting}>Отправить</button>
                        <button type="button" onClick={onClose}>Закрыть</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;