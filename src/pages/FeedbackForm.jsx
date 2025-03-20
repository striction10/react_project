import { useState } from "react";
import FeedbackFormPortal from "../components/FeedbackFormPortal";

const FeedbackForm = ({ onClose }) => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Отправлено: ", { name, message });
        alert(`Спасибо, ${name}! Ваше сообщение отправлено!`);
        onClose();
    };
    return (
        <div>
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
                        <button type="submit">Отправить</button>
                        <button type="button" onClick={onClose}>Закрыть</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const App = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const openForm = () => setIsFormOpen(true);
    const closeForm = () => setIsFormOpen(false);

    return (
        <div>
            <h1>Добро пожаловать!</h1>
            <div>
                <button onClick={openForm}>Открыть форму обратной связи</button>
            </div>
            <FeedbackFormPortal isOpen={isFormOpen} onClose={closeForm}></FeedbackFormPortal>
        </div>
    )
} 

export default App;