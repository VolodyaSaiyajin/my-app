import React from "react";
import style from './posting.css';



const Posting = (props) => {
    let newPostElement = React.createRef();
    let onUpdatePost = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text);
        // console.log(props.defaultValue);
        
    }

    let addPost = () => {
        console.log(`Значение ${props.defaultValue}`);
        props.addPost();
        
    }

    return (
        <div className="posting">
            <input value={props.defaultValue} onChange={onUpdatePost} ref={newPostElement} className="posting__addPosting" placeholder="Введите текст" type="text" />
            <button onClick={addPost} className="posting__send">Отправить</button>
        </div>
    );
}
export default Posting;