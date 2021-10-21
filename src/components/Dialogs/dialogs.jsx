import React from 'react'
import DialogUser from './users/dialogUser'
import style from './dialogs.css'


const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <DialogUser message="Привет брот" />
    </div>
    )
    
}
export default Dialogs
