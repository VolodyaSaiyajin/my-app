// eslint-disable-next-line
import React from "react";
import style from './header.css';
import logo from "../images/svg/csgo.svg";

const Header = (props) => {
    return (
    <header className="header">
        <div className="header__header-row">
            <div className="header__logo">
                <img src={logo} alt="#" />
            </div>
            <h1 className="header__title">Киберспортивная социальная сеть</h1>
            <div className="header__navigation-bar">
                <div className="header__item"><a className="header__adress" href="#">Главная</a></div>
                <div className="header__item"><a className="header__adress" href="#">Форум</a></div>
                <div className="header__item"><a className="header__adress" href="#">Маркет</a></div>
                <div className="header__item"><a className="header__adress" href="#">О нас</a></div>
                <div className="header__item"><a className="header__adress" href="#">{props.isAuth ? props.nickname : <p>Авторизация</p>}</a></div>
            </div>
        </div>
    </header>
    );
}


export default Header;