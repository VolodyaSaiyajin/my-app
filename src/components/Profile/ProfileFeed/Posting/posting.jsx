import React from "react";

const Posting = (props) => {
    debugger;

    let newPostElement = React.createRef();

    let onUpdatePost = () => {
        props.onUpdatePost()
    }

    let addPost = () => {
        props.addPost();
    }

    return (

        <div className="posting">
            <input value={props.defaultValue} onChange={onUpdatePost} ref={newPostElement}
                   className="posting__addPosting" placeholder="Введите текст" type="text"/>
            <button onClick={addPost} className="posting__send">Отправить</button>
        </div>
    )
}

export default Posting;