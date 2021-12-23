import React from "react";
import {connect} from "react-redux";
import ProfileFeed from "./profileFeed";
import {setUserId, setUserProfile} from "../../../Redux/postingReducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../../Redux/api";


class ProfileFeedContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

            usersAPI.getProfile(userId)
                .then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        debugger
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