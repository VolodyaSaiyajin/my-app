const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const ADD_MESSAGE = "ADD_MESSAGE";

let initialState = {
    _dialogs: [
        {id: 1, name: "Данила Котова", message: "Привет брот"},
        {id: 2, name: "Марина Кузко", message: "Ямарина"},
        {id: 3, name: "Владимир Тильт", message: "Я тебя убью"},
        {id: 4, name: "Владислав Харитонов", message: "Тишка привет"}
    ],

    _messages: [
        {id: 1, name: "Данила Котова", message: "Привет брот"},
        {id: 2, name: "Марина Кузко", message: "Ямарина"},
        {id: 3, name: "Владимир Тильт", message: "Я тебя убью"},
        {id: 4, name: "Владислав Харитонов", message: "Тишка привет"},
    ],

    _newMessageText: "",
}

const dialogReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                name: "Новый пользователь",
                message: state._newMessageText,
            };
            debugger
            return {
                ...state,
                _messages: [...state._messages, newMessage],
                _newMessageText: ''
            };

        }
        case UPDATE_NEW_MESSAGE: {
            debugger
            return {
                ...state,
                _newMessageText: action.newText
            }
        }
        default:
            return state
    }

}


export const addMessageActionToState = () => ({type: ADD_MESSAGE})
export const updateNewMessageActionToState = (newText) => ({type: UPDATE_NEW_MESSAGE, newText})

export default dialogReducer;