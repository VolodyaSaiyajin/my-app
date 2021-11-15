import React from 'react'
import DialogUser from './users/dialogUser'
import style from './dialogs.css'
import DialogToUser from './dialogWithUser/dialogWithUser'
import Dialogs from "./dialogs";
import {addMessageActionToState, updateNewMessageActionToState} from "../../Redux/dialogReducer";
import {connect} from "react-redux";
import ContentBar from "../Profile/ProfileFeed/ContentBar/contentBar";
debugger




let mapStateToProps = (state) => {
    return {
        state: state,
        dialogElements: state.dialogsPage,
        getMessageTextFromStore: state.dialogsPage._newMessageText,
        dialogWithUserElements: state.dialogsPage._dialogs
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateMessage: () => {
            dispatch(updateNewMessageActionToState())
        },

        addMessage: (text) => {
            dispatch(addMessageActionToState(text))
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
