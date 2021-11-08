import React from "react";
import style from './posting.css';
import Posting from './posting';


const PostingContainer = (props) => {
    
    let newPostElement = React.createRef();
    let onUpdatePost = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-POST', newText: text });
        debugger;
    }

    let addPost = () => {
        
        console.log(`Значение ${props.defaultValue}`);
        props.dispatch({ type: 'ADD-POST' });

    }

    return (
        <Posting/>

    );
}
export default PostingContainer;