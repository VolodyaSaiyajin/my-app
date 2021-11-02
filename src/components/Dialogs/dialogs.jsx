import React from 'react'
import DialogUser from './users/dialogUser'
import style from './dialogs.css'
import DialogToUser from './dialogWithUser/dialogWithUser'


const Dialogs = (props) => {
  debugger;
  let dialogElements = props.dialogState.getDialogs().map(elem => <DialogUser
    name={elem.name}
    message={elem.message} />);

  let dialogWithUserElements = props.dialogState.getMessages().map(elem => <DialogToUser
    name={elem.name}
    message={elem.message} />);

  let newMessageElement = React.createRef();

  let onUpdateMessage = () => {
    debugger;
    let text = newMessageElement.current.value;
    props.dispatch({ type: 'UPDATE-NEW-MESSAGE', newText: text });
    // console.log(props.defaultValue);

  }

  let addMessage = () => {
    debugger;
    console.log(`Значение ${props.defaultValue}`);
    props.dispatch({ type: 'ADD-MESSAGE' });

  }

  return (
    <div className="dialogs">
      <div className="dialogs__elements">{dialogElements}</div>
      <div className="dialogs__with-user">
        <div className="dialogs__with-user-elements">{dialogWithUserElements}</div>
        <div className="dialogs-user__input-message">
          <textarea ref={newMessageElement} onChange={onUpdateMessage} placeholder="Введите сообщение" type="text" className="dialogs-user__input-message-element" />
          <button onClick={addMessage} className="dialogs-user__send-message">Отправить</button>
        </div>
      </div>
    </div>
  )

}
export default Dialogs;
