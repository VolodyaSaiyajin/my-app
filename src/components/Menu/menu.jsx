import style from "./menu.css";
import React from "react";
import { NavLink } from "react-router-dom";

const MenuNavigation = (props) => {

    return (
    <nav className="Navigation">
        <div className="Navigation__row">
            <div className="Navigation__block"><NavLink to={`/Profile/${props.userId}`} className="Navigation__adress">{props.isAuth
                ? props.nickname
            : "Профиль"}</NavLink></div>
            <div className="Navigation__block"> <NavLink to="/Dialogs/" className="Navigation__adress">Сообщения</NavLink></div>
            <div className="Navigation__block"><a className="Navigation__adress" href="#">Новости</a></div>
            <div className="Navigation__block"><a className="Navigation__adress" href="#">Музыка</a></div>
            <div className="Navigation__block"><a className="Navigation__adress" href="#">Настройки</a></div>
            <div className="Navigation__block"><NavLink to="/Search/" className="Navigation__adress">Поиск людей</NavLink></div>
        </div>
    </nav>
    );
}

export default MenuNavigation;