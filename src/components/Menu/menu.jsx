import style from "./menu.css";
import React from "react";

const MenuNavigation = () => {
    
    return (
        
    <nav className="Navigation">
        <a className="Navigation__adress" href="#">Профиль</a>
        <a className="Navigation__adress" href="#">Сообщения</a>
        <a className="Navigation__adress" href="#">Новости</a>
        <a className="Navigation__adress" href="#">Музыка</a>
        <a className="Navigation__adress" href="#">Настройки</a>
    </nav>
    );
}

export default MenuNavigation;