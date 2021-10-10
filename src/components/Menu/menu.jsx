import style from "./menu.css";
import React from "react";
import { NavLink } from "react-router-dom";

const MenuNavigation = () => {
    
    return (
        
    <nav className="Navigation">
        <NavLink to="/Profile/" className="Navigation__adress">Профиль</NavLink>
        <NavLink to="/Dialogs/" className="Navigation__adress">Сообщения</NavLink>
        <a className="Navigation__adress" href="#">Новости</a>
        <a className="Navigation__adress" href="#">Музыка</a>
        <a className="Navigation__adress" href="#">Настройки</a>
    </nav>
    );
}

export default MenuNavigation;