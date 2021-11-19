import React from 'react'
import style from './dialogWithUser.css'


const DialogToUser = (props) => {
    debugger
    console.log("работает")
  return (
    <div className="dialogs-user">
      <div className="dialogs-user__dialog-with-user">
        <div className="dialogs-user__dialog-element">
          <p className="dialogs-user__name">{props.name}</p>
          <p className="dialogs-user__message">{props.message}</p>
        </div>
      </div>
    </div>

  )

}

export default DialogToUser;
