import React from "react";

const Posting = (props) => {

    let newPostElement = React.createRef();

    let onUpdatePost = () => {
        debugger
        let text = newPostElement.current.value;
        props.onUpdatePost(text)
    }

    let addPost = () => {
        debugger
        props.addPost();
    }
    debugger
    return (

        <div className="posting">
            <input value={props._newPostText} onChange={onUpdatePost} ref={newPostElement}
                   className="posting__addPosting" placeholder="Введите текст" type="text"/>
            <button onClick={addPost} className="posting__send">Отправить</button>
        </div>
    )
}

export default Posting;