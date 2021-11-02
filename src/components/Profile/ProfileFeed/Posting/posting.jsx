import React from "react";
import style from './posting.css';



const Posting = (props) => {
    
    let newPostElement = React.createRef();
    let onUpdatePost = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-POST', newText: text });
        // console.log(props.defaultValue);
        debugger;
    }

    let addPost = () => {
        
        console.log(`Значение ${props.defaultValue}`);
        props.dispatch({ type: 'ADD-POST' });

    }

    return (
        <div className="posting">
            <input value={props.defaultValue} onChange={onUpdatePost} ref={newPostElement} className="posting__addPosting" placeholder="Введите текст" type="text" />
            <button onClick={addPost} className="posting__send">Отправить</button>
        </div>
    );
}
export default Posting;