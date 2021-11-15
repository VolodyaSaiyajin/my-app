import React from "react";
import style from './posting.css';
import Posting from './posting';
import {connect} from "react-redux";
import {addPostActionToState, updateNewPostActionToState} from "../../../../Redux/postingReducer";



let mapStateToProps = (state) => {
    debugger;
    return {
        newPostElement: state.profilePage._profileState._newPostText,
        dialogElements: state.profilePage._profileState,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostActionToState(text));
        },

        onUpdatePost: (text) => {
            dispatch(updateNewPostActionToState(text));
        }

    }

}


const PostingContainer = connect(mapStateToProps, mapDispatchToProps)(Posting);
export default PostingContainer;