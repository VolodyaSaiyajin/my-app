import React from "react";
import style from './posting.css';

const Posting = () => {
    return (
    <div className="posting">
        <input className="posting__addPosting" placeholder="Введите текст" type="text" />
    </div>
    );
}

export default Posting;