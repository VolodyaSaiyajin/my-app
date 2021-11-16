import React from "react";
import {connect} from "react-redux";
import ProfileFeed from "./profileFeed";


let mapStateToProps = (state) => {
    return {
        _postsForMap: state.profilePage._posts,
    }
}

const ProfileContainer = connect(mapStateToProps)(ProfileFeed);

export default ProfileContainer;