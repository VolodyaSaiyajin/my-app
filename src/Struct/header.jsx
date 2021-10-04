// eslint-disable-next-line
import React from "react";
import logo from "./images/cat.jpg";

const Header = () => {
    return (
    <header className="header">
        <div className="header__logo">
            <img src={logo} alt="#" />
        </div>
        <div className="header__navigation-bar">
            <a className="header__item" href="#">Main</a>
            <a className="header__item" href="#">About Us</a>
            <a className="header__item" href="#">Forum</a>
            <a className="header__item" href="#">Buy</a>
        </div>
    </header>
    );
}

export default Header;