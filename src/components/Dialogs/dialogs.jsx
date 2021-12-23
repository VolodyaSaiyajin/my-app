import React from "react";
import DialogsItems from "./dialogsItems";
import DialogToUser from "./dialogWithUser/dialogWithUser";
import DialogUser from "./users/dialogUser";



const Dialogs = (props) => {
    let onUpdateMessage = () => {
        debugger
        let text = newMessageElement.current.value;
        props.onUpdateMessage(text);
    }

    let onAddMessage = () => {
        debugger
        props.addMessage();
    }

    let newMessageElement = React.createRef();

    let dialogElements = props.dialogWithUserElements.map(elem => <DialogToUser
        name={elem.name}
        message={elem.message}
        id={elem.id}
        key={elem.id}/>);

    let dialogWithUserElements = props.messageElements.map(elem => <DialogUser
        name={elem.name}
        message={elem.message}
        id={elem.id}
        key={elem.id}/>);


    return (
        <div className="dialogs">
            <div className="dialogs__elements">{dialogWithUserElements}</div>
            <div className="dialogs__with-user">
                <div className="dialogs__with-user-elements">{dialogElements}</div>
                <div className="dialogs-user__input-message">
                    <textarea value={props.getMessageTextFromStore} ref={newMessageElement} onChange={onUpdateMessage} placeholder="Введите сообщение" type="text" className="dialogs-user__input-message-element" />
                    <button onClick={onAddMessage} className="dialogs-user__send-message">Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;