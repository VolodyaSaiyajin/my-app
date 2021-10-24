import React from 'react'
import DialogUser from './users/dialogUser'
import style from './dialogs.css'


const Dialogs = (props) => {
  debugger
  let dialogElements = props.dialogState.getDialogs().map(elem => <DialogUser
    name={elem.name}
    message={elem.message} />);

  return (
    <div className="dialogs">
      {dialogElements}
    </div>
  )

}
export default Dialogs;
