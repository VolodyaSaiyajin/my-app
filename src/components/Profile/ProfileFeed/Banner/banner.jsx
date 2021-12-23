import React from "react";
import style from './contentBanner.css';
import bannerImg from "./bannerImage/nightSky.jpg";

const Banner = (props) => {
    if (!props.profile) {
       return <p>ПУСТО</p>
    }
    return (
    <div className="banner">
        <img className="banner__item" src={props.profile.photos.large} alt="Аватарка" />

    </div>
    );
}

export default Banner;