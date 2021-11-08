let initialState = {

    _dialogsPage: {
        _dialogs: [
            {id: 1, name: "Данила Котова", message: "Привет брот"},
            {id: 2, name: "Марина Кузко", message: "Ямарина"},
            {id: 3, name: "Владимир Тильт", message: "Я тебя убью"},
            {id: 4, name: "Владислав Харитонов", message: "Тишка привет"}
        ],

        getDialogs() {
            return this._dialogs;
        },

        _messages:  [
                {id: 1, name: "Данила Котова", message: "Привет брот"},
                {id: 2, name: "Марина Кузко", message: "Ямарина"},
                {id: 3, name: "Владимир Тильт", message: "Я тебя убью"},
                {id: 4, name: "Владислав Харитонов", message: "Тишка привет"},
            ],
        _newMessageText: "",

        getMessageText() {
            return this._newMessageText;
        },

        getMessages() {
            return this._messages;
        },

    },

    getDialogPage() {
        return this._dialogsPage;
    }
}

const dialogReducer = (state = initialState, action) => {

    if (action.type === 'ADD-MESSAGE') {
        debugger;
        let newMessage = {
            id: 5,
            name: "Новый пользователь",
            message: state.getDialogPage().getMessageText(),
        }
        state.getDialogPage()._dialogs.push(newMessage);
        state.getDialogPage()._newMessageText = "";

    }

    else if (action.type === 'UPDATE-NEW-MESSAGE') {
        debugger;
        state.getDialogPage()._newMessageText = action.newText;
    }
    return state;
}

export default dialogReducer;