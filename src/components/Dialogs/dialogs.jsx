import React from 'react'
import imageAvatar from './images/donilaCotov.jpg'
import style from './dialogs.css'

const Dialogs = () => {
  return (
    <div className="dialogs">
      <div className="dialogs__avatar">
        <img className="dialogs__avatar-img" src={imageAvatar} alt="" />
      </div>
      <div className="dialogs__user">
        <p className="dialogs__user-nickname">Дядя Бодя</p>
      </div>
    </div>
  )
}
export default Dialogs
