import React from "react";

const Posting = (props) => {
    debugger;
    return (

        <div className="posting">
            <input value={props.defaultValue} onChange={props.onUpdatePost} ref={props.newPostElement}
                   className="posting__addPosting" placeholder="Введите текст" type="text"/>
            <button onClick={props.addPost} className="posting__send">Отправить</button>
        </div>
    )
}

export default Posting;