import React from "react";
import style from './contentBanner.css';
import bannerImg from "./bannerImage/nightSky.jpg";

const Banner = (props) => {
    debugger
    if (!props.profile) {
       return <p>ПУСТО</p>
    }
    return (
    <div className="banner">
        <img className="banner__item" src={props.profile.photos.large} alt="" />

    </div>
    );
}

export default Banner;