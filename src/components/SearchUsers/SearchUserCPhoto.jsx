import React from "react";
import nullAvatar from "./ifAvatarNotFound/cg-xE6mGewg.jpg"
debugger
let UsersPhoto = (props) => {
    return (
        <img className="search-users__avatar" src={nullAvatar || props.avatar} alt=""/>
    )
}

export default UsersPhoto;