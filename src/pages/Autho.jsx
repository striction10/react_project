import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loginName, setLoginName] = useState("");
    const [loginPasswd, setLoginPassword] = useState("");

    const loginUser = useCallback(async () => {
        if (!loginName || !loginPasswd) return;
        try {
          const { data, error} = await supabase.from("users_2").select("*").eq("name", loginName).eq("passwd", loginPasswd).single();
          if (error) {
            console.error(error);
            alert("Ошибка авторизации: " + error.message);
            navigate("/register");
          } 
          else if (data) {
            alert("Авторизация прошла успешно!");
          } 
          else {
            alert("Неверное имя пользователя или пароль");
          }
        } 
        catch (err) {
          console.error("Ошибка", err);
        }
      }, [loginName, loginPasswd])
      return (
        <div>
              <h1>Авторизация</h1>
              <div className="input-container">
                <input type="text" placeholder="Enter your name" value={loginName} onChange={(e) => setLoginName(e.target.value)}></input>
                <input type="password" placeholder="Enter password" value={loginPasswd} onChange={(e) => setLoginPassword(e.target.value)}></input>
                <br></br>
                <button onClick={loginUser}>Авторизоваться</button>
              </div>
              <hr></hr>
              <p>Нет аккаунта?<br /><butto onClick={() => navigate("/register")}>Зарегистрироваться</butto></p>
        </div>
      )
}

export default Login;