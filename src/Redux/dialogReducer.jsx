const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const ADD_MESSAGE = "ADD_MESSAGE";

let initialState = {

        _dialogsState: {
            _dialogs: [
                {id: 1, name: "Данила Котова", message: "Привет брот"},
                {id: 2, name: "Марина Кузко", message: "Ямарина"},
                {id: 3, name: "Владимир Тильт", message: "Я тебя убью"},
                {id: 4, name: "Владислав Харитонов", message: "Тишка привет"}
            ],

            getDialogs() {
                return this._dialogs;
            },

            _messages: [
                {id: 1, name: "Данила Котова", message: "Привет брот"},
                {id: 2, name: "Марина Кузко", message: "Ямарина"},
                {id: 3, name: "Владимир Тильт", message: "Я тебя убью"},
                {id: 4, name: "Владислав Харитонов", message: "Тишка привет"},
            ],

            _newMessageText: "",

            getMessages() {

                return this._messages;
            }
        }
}

const dialogReducer = (state = initialState, action) => {
    debugger

    let stateCopy = {
        ...state,
        _messages: [...state._dialogsState._messages],
        _dialogs: [...state._dialogsState._dialogs],
        _newMessageText: [...state._dialogsState._newMessageText]
    }

    if (action.type === ADD_MESSAGE) {
        let newMessageBody = stateCopy._newMessageText;
        let newMessage = {
            id: 5,
            name: "Новый пользователь",
            message: newMessageBody,
        }
        stateCopy._dialogs.push(newMessage);
        stateCopy._newMessageText = "";

    } else if (action.type === UPDATE_NEW_MESSAGE) {
        stateCopy._newMessageText = action.newText;
    }
    return stateCopy;


}


export const addMessageActionToState = () => ({type: ADD_MESSAGE})
export const updateNewMessageActionToState = (newText) => ({type: UPDATE_NEW_MESSAGE, newText})

export default dialogReducer;