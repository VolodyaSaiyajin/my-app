import React from 'react'
import style from './dialogUser.css'
import imageAvatar from './images/donilaCotov.jpg'



const dialogUser = (props) => {

  return (
    <div className="dialogs__item">
      <div className="dialogs__user">
        <div className="dialogs__avatar"><img src={imageAvatar} alt="Аватар" /></div>
        <div className="dialogs__nickname"><a href="" className="dialogs__nickname-item">{props.name}</a></div>
      </div>
      <div className="dialogs__message">
        <p className="dialogs__message-item">{props.message}</p>
      </div>
    </div>
  )
}
export default dialogUser
