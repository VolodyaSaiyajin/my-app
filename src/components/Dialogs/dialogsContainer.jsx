import React from 'react'
import style from './dialogs.css'
import Dialogs from "./dialogs";
import {addMessageActionToState, updateNewMessageActionToState} from "../../Redux/dialogReducer";
import {connect} from "react-redux";
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
