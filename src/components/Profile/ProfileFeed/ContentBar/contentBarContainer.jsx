import React from "react";
import style from './contentBar.css';
import catAva from "./Images/catAva.jpg";



const ContentBarContainer = (props) => {

    return (
        <div className="content-bar">
            <img className="content-bar__avatar" src={catAva} alt="" />
            <p className="content-bar__nickname"><a href="#">{props.name}</a></p>
            <p className="content-bar__message">{props.message}</p>
            <div className="content-bar__likes">
                <p className="content-bar__count">♡ {props.likesCount}</p>
            </div>
        </div>
    );
}


export default ContentBarContainer;