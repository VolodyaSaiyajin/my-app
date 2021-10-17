import React from 'react'
import style from './dialogUser.css'
import imageAvatar from './images/donilaCotov.jpg'

const dialogUser = () => {
  return (
    <div className="dialogs__item">
      <div className="dialogs__user">
        <div className="dialogs__avatar"><img src={imageAvatar} alt="Аватар" /></div>
        <div className="dialogs__nickname"><a href="#" className="dialogs__nickname-item">Данила Котова</a></div>
      </div>
      <div className="dialogs__message">
        <p className="dialogs__message-item">Приветствую. Столкнулся с проблемой в необходимости оптимизации виртуалки, т.к. макОС работает с дикими тормозами и откровенно неисправно, много программ отображаются неверно. Но самое печальное - невозможность банально проверить свою программу в xCode путем запуска эмулятора. Причем пустой проект эмулятор спустя 5-10 минут таки загружает, но уже загруженный функциями, циклами, кнопками и прочим не хочет, программа вылетает. Периодически возникают ошибки, скрины их кидаю ниже. С подобными техническими причинами я не могу себя реализовать полноценно в свифте, поэтому прошу помощи.</p>
      </div>
    </div>
  )
}
export default dialogUser
