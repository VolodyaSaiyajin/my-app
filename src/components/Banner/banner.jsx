import React from "react";
import banner from "../images/nightSky.jpg"

const PageBanner = () => {
    return (
    <div className="banner">
        <img className="baner__item" src={banner} alt="" />
    </div>
    );
}

export default PageBanner;