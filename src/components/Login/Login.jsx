import React from "react";
import style from "./Login.css"

const Login = (props) => {
    return (
        <div className="login">
            <h2 className="login__title">Логин</h2>
            <p className="login__message">Вы не авторизованы, введите свой логин</p>
            <textarea className="login__login-textarea" name="login" id="" cols="30" rows="10"></textarea>

        </div>
    )
}

export default Login