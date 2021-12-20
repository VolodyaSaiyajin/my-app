import React from "react";
import {connect} from "react-redux";
import ProfileFeed from "./profileFeed";
import * as axios from "axios";
import {setUserId, setUserProfile} from "../../../Redux/postingReducer";
import {withRouter} from "react-router-dom";


class ProfileFeedContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <ProfileFeed onPageChanged={this.onPageChanged} {...this.props}/>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        _postsForMap: state.profilePage._posts,
        profile: state.profilePage._profile,
        profileId: state.profilePage._profileId
    }
}

let DataWithUrlContainerComponent = withRouter(ProfileFeedContainer)

export default  connect(mapStateToProps, {
    setUserProfile,
    setUserId,
})(DataWithUrlContainerComponent);