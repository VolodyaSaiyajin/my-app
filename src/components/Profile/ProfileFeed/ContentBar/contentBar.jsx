import React from "react";
import style from './contentBar.css';
import catAva from "./Images/catAva.jpg";


const ContentBar = () => {
    return (
        <div className="content-bar">
            <img className="content-bar__avatar" src={catAva} alt="" />
            <p className="content-bar__nickname"><a href="#">Дядя Бодя</a></p>
            <p className="content-bar__message">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Речью алфавит переулка наш это маленькая, домах использовало она за.</p>
            <div className="content-bar__likes">
                <p className="content-bar__count">♡</p>
            </div>
        </div>
    );
}


export default ContentBar;