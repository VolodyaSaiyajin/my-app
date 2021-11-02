const dialogReducer = (state, action) => {

    if (action.type === 'ADD-MESSAGE') {
        let newMessage = {
            id: 5,
            name: "Новый пользователь",
            message: state._newMessageText,
        }
        state._messages.push(newMessage);
        state._newMessageText = "";
        
    }

    else if (action.type === 'UPDATE-NEW-MESSAGE') {
        debugger;
        state._newMessageText = action.newText;
    }
    return state;
}

export default dialogReducer;