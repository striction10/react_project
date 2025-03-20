import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerPasswd, setRegisterPassword] = useState("");

    const addUser = useCallback(async () => {
        if (!registerName || !registerPasswd) return;
        try {
            const { error } = await supabase.from("users_2").insert([{ name: registerName, passwd: registerPasswd }]);
            if (error) {
                setError("Неверный логин или пароль");
                navigate("/")
                console.error(error);
            }
            else {
                setRegisterName("");
                setRegisterPassword("");
                alert("Регистрация прошла успешно!");
            }
        }
        catch (err) {
            console.error("Ошибка", err);
        }
      }, [registerName, registerPasswd]);
      return (
        <div>
              <h1>Регистрация</h1>
              <div className="input-container">
                <input type="text" placeholder="Enter your name" value={registerName} onChange={(e) => setRegisterName(e.target.value)}></input>
                <input type="password" placeholder="Enter password" value={registerPasswd} onChange={(e) => setRegisterPassword(e.target.value)}></input>
                <br></br>
                <button onClick={addUser}>Зарегистрироваться</button>
              </div>
              <hr></hr>
        </div>
      )
}

export default Login;