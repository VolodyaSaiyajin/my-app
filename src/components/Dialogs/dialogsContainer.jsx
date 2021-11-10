import React from 'react'
import DialogUser from './users/dialogUser'
import style from './dialogs.css'
import DialogToUser from './dialogWithUser/dialogWithUser'
import Dialogs from "./dialogs";


const DialogsContainer = (props) => {
  debugger;
  let dialogElements = props.dialogState.getDialogPage().getMessages().map(elem => <DialogUser
    name={elem.name}
    message={elem.message} />);

  let dialogWithUserElements = props.dialogState.getDialogPage().getDialogs().map(elem => <DialogToUser
    name={elem.name}
    message={elem.message} />);

  let newMessageElement = React.createRef();

  let onUpdateMessage = () => {
    let text = newMessageElement.current.value;
    props.dispatch({ type: 'UPDATE-NEW-MESSAGE', newText: text });

  }

  let addMessage = () => {
    debugger;
    console.log(`Значение ${props.defaultValue}`);
    props.dispatch({ type: 'ADD-MESSAGE' });

  }

  return (
    <Dialogs onUpdateMessage={onUpdateMessage} dialogElements={dialogElements} dialogWithUserElements={dialogWithUserElements} newMessageElement={newMessageElement} addMessage={addMessage} getMessageTextFromStore={props.dialogState._dialogsPage.getMessageText()}/>
  )

}
export default DialogsContainer;
