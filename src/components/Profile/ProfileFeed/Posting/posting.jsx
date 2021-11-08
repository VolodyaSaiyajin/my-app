import React from "react";

const Posting =  (props) => {
    return (
        <div className="posting">
            <input value={props.defaultValue} onChange={onUpdatePost} ref={newPostElement} className="posting__addPosting" placeholder="Введите текст" type="text" />
            <button onClick={addPost} className="posting__send">Отправить</button>
        </div>


)
    }

export default Posting;