const postingReducer = (state, action) => {
    debugger;
    if (action.type === 'ADD-POST') {
        let newPost = {
            id: 5,
            name: "Новый пользователь",
            post: state._newPostText,
            likesCont: "0"
        }
        state._posts.push(newPost);
        state._newPostText = '';
    }
    else if (action.type === 'UPDATE-NEW-POST') {
        debugger;
        state._newPostText = action.newText;
    }
    return state;

}


export default postingReducer;