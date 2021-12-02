const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const ADD_MESSAGE = "ADD_MESSAGE";

let initialState = {
    _dialogs: [
        {id: 1, name: "Данила Котова", message: "Привет брот"},
        {id: 2, name: "Марина Кузко", message: "Ямарина"},
        {id: 3, name: "Владимир Тильт", message: "Я слежу за тобой, ничтожество"},
        {id: 4, name: "Владислав Харитонов", message: "Тишка привет"}
    ],

    _messages: [
        {id: 1, name: "Данила Котова", message: "Привет брот"},
        {id: 2, name: "Марина Кузко", message: "Яма рина"},
        {id: 3, name: "Владимир Тильт", message: "Я слежу за тобой, ничтожество"},
        {id: 4, name: "Владислав Харитонов", message: "Тишка привет"},
    ],

    _newMessageText: "",
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let message = state._newMessageText;

            // let newMessage = {
            //     id: 5,
            //     name: "Новый пользователь",
            //
            // };
            //
            // let newMessageText = state._newMessageText;
            return {
                ...state,
                _newMessageText: '',
                _dialogs: [...state._dialogs, {id: 6, name: "New User", message: message}],
            };

        }
        case UPDATE_NEW_MESSAGE: {
            return {
                ...state,
                _newMessageText: action.textMessage
            }
        }
        default:
            return state
    }

}


export const addMessageActionToState = () => ({type: ADD_MESSAGE})
export const updateNewMessageActionToState = (newText) => ({type: UPDATE_NEW_MESSAGE, textMessage: newText})

export default dialogReducer;