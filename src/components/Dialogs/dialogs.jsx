import React from "react";

const Dialogs = (props) => {
debugger
    return (
        <div className="dialogs">
            <div className="dialogs__elements">{props.dialogElements}</div>
            <div className="dialogs__with-user">
                <div className="dialogs__with-user-elements">{props.dialogWithUserElements}</div>
                <div className="dialogs-user__input-message">
                    <textarea value={props.getMessageTextFromStore} ref={props.newMessageElement}
                              onChange={props.onUpdateMessage} placeholder="Введите сообщение" type="text"
                              className="dialogs-user__input-message-element"/>
                    <button onClick={props.addMessage} className="dialogs-user__send-message">Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;