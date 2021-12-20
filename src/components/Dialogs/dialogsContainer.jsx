import React from 'react'
import style from './dialogs.css'
import Dialogs from "./dialogs";
import {addMessageActionToState, updateNewMessageActionToState} from "../../Redux/dialogReducer";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        getMessageTextFromStore: state.dialogsPage._newMessageText,
        dialogWithUserElements: state.dialogsPage._dialogs,
        messageElements: state.dialogsPage._messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateMessage: (text) => {
            dispatch(updateNewMessageActionToState(text))
        },

        addMessage: () => {
            dispatch(addMessageActionToState())
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
