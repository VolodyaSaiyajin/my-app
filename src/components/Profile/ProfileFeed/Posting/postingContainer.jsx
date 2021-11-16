import React from "react";
import style from './posting.css';
import Posting from './posting';
import {connect} from "react-redux";
import {addPostActionToState, updateNewPostActionToState} from "../../../../Redux/postingReducer";



let mapStateToProps = (state) => {
    debugger;
    return {
        _newPostText: state.profilePage._newPostText,
        _posts: state.profilePage._posts,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionToState());
        },

        onUpdatePost: (text) => {
            let action = dispatch(updateNewPostActionToState(text));
            dispatch(action);
        }

    }

}


const PostingContainer = connect(mapStateToProps, mapDispatchToProps)(Posting);
export default PostingContainer;