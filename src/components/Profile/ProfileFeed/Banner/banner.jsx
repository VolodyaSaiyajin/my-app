import React from "react";
import style from './contentBanner.css';
import bannerImg from "./bannerImage/nightSky.jpg";
import ifAvatarNotFound from "../../../SearchUsers/ifAvatarNotFound/cg-xE6mGewg.jpg"


const Banner = (props) => {
    if (!props.profile) {
        debugger
       return (
           <div className="banner">
               <img className="banner__item" src={ifAvatarNotFound} alt=""/>
           </div>
       )
    }
    return (
    <div className="banner">
        <img className="banner__item" src={props.profile.photos.large} alt="пидорас" />

    </div>
    );
}

export default Banner;