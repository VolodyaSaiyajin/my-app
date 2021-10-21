import React from "react";
import style from './posting.css';



const Posting = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = " ";
    }

    return (
        <div className="posting">
            <input ref={newPostElement} className="posting__addPosting" placeholder="Введите текст" type="text" />
            <button onClick={addPost} className="posting__send">Отправить</button>
        </div>
    );
}
export default Posting;