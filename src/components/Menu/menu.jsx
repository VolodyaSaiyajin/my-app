import style from "./menu.css";
import React from "react";
import { NavLink } from "react-router-dom";

const MenuNavigation = () => {
    
    return (
        
    <nav className="Navigation">
        <NavLink to="/Profile/5" className="Navigation__adress">Профиль</NavLink>
        <NavLink to="/Dialogs/" className="Navigation__adress">Сообщения</NavLink>
        <a className="Navigation__adress" href="#">Новости</a>
        <a className="Navigation__adress" href="#">Музыка</a>
        <a className="Navigation__adress" href="#">Настройки</a>
        <NavLink to="/Search/" className="Navigation__adress">Поиск людей</NavLink>
    </nav>
    );
}

export default MenuNavigation;