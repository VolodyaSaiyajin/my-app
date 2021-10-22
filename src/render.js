import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, subscribe, updateNewPost, store} from './Redux/data';

export let rerenderEntireTree = (store) => {

  ReactDOM.render(
    <React.StrictMode>
      <App state={store} addPost={addPost} updateNewPost={updateNewPost}/>
    </React.StrictMode>, document.getElementById('root')
  );
}

rerenderEntireTree(store);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();