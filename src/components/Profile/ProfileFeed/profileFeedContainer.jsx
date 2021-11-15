import React from "react";
import {connect} from "react-redux";
import ProfileFeed from "./profileFeed";
import {addMessageActionToState, updateNewMessageActionToState} from "../../../Redux/dialogReducer";


let mapStateToProps = (state) => {
    return {
        state: state,
        _profileState: state.profilePage._profileState,
        _posts: state.profilePage._profileState._posts,
        _dialogs: state.profilePage._profileState._dialogs
    }
}

let mapDispatchToProps = (dispatch) => {
    debugger
    return {
        onUpdateMessage: () => {
            dispatch(updateNewMessageActionToState())
        },

        addMessage: (text) => {
            dispatch(addMessageActionToState(text))
        }

    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileFeed);

export default ProfileContainer;