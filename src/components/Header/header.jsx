// eslint-disable-next-line
import React from "react";
import style from './header.css';
import logo from "../images/svg/csgo.svg";
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
    <header className="header">
        <div className="header__header-row">
            <div className="header__logo">
                <img src={logo} alt="#" />
            </div>
            <h1 className="header__title">Киберспортивная социальная сеть</h1>
            <div className="header__navigation-bar">
                <div className="header__item">
                    <NavLink to="/" className="header__adress" href="#">Главная</NavLink>
                </div>
                <div className="header__item">
                    <NavLink to="/" className="header__adress" href="#">Форум</NavLink>
                </div>
                <div className="header__item">
                    <NavLink to="/" className="header__adress" href="#">Маркет</NavLink>
                </div>
                <div className="header__item">
                    <NavLink to="/`{itsMe}`" className="header__adress" href="#">О нас</NavLink>
                </div>
                <div className="header__item">{props.isAuth
                        ? <NavLink to={`/Profile/${props.userId}`} className="header__adress">{props.nickname}</NavLink>
                        : <NavLink to="/Login" className="header__adress">Авторизация</NavLink>}
                </div>
            </div>
        </div>
    </header>
    );
}


export default Header;