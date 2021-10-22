import React from "react";
import style from './posting.css';



const Posting = (props) => {
    let newPostElement = React.createRef();

    

    let onUpdatePost = () => {
        console.log("текст изменён");
        let text = newPostElement.current.value;
        props.updateNewPost(text);
    }

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        props.updateNewPost('');
    }

    return (
        <div className="posting">
            <input onChange={onUpdatePost} ref={newPostElement} className="posting__addPosting" placeholder="Введите текст" type="text" />
            <button onClick={addPost} className="posting__send">Отправить</button>
        </div>
    );
}
export default Posting;