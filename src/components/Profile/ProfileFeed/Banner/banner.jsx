import React from "react";
import style from './contentBanner.css';
import bannerImg from "./bannerImage/nightSky.jpg";

const Banner = () => {
    return (
    <div className="banner">
        <img className="banner__item" src={bannerImg} alt="" />
    </div>
    );
}

export default Banner;