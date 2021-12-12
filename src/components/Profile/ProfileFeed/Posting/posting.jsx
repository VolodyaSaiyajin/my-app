import React from "react";

const Posting = (props) => {

    let newPostElement = React.createRef();

    let onUpdatePost = () => {
        let text = newPostElement.current.value;
        props.onUpdatePost(text)
    }

    let addPost = () => {
        props.addPost();
    }
    return (

        <div className="posting">
            <input value={props._newPostText} onChange={onUpdatePost} ref={newPostElement}
                   className="posting__addPosting" placeholder="Введите текст" type="text"/>
            <button onClick={addPost} className="posting__send">Отправить</button>
        </div>
    )
}

export default Posting;