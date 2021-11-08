let initialState = {

    _dialogsPage: {
        _dialogs: [
            {id: 1, name: "Данила Котова", message: "Привет брот"},
            {id: 2, name: "Марина Кузко", message: "Ямарина"},
            {id: 3, name: "Владимир Тильт", message: "Я тебя убью"},
            {id: 4, name: "Владислав Харитонов", message: "Тишка привет"}
        ],

        getDialogs() {
            return initialState._dialogsPage._dialogs;
        },

        _messages:  [
                {id: 1, name: "Данила Котова", message: "Привет брот"},
                {id: 2, name: "Марина Кузко", message: "Ямарина"},
                {id: 3, name: "Владимир Тильт", message: "Я тебя убью"},
                {id: 4, name: "Владислав Харитонов", message: "Тишка привет"},
            ],
        _newMessageText: "",

        getMessageText() {
            return initialState.getDialogPage()._newMessageText;
        },

        getMessages() {

            return initialState.getDialogPage()._messages;
        },

    },

    getDialogPage() {
        return initialState._dialogsPage;
    }
}

const dialogReducer = (state = initialState, action) => {
    debugger
    if (action.type === 'ADD-MESSAGE') {
        let newMessage = {
            id: 5,
            name: "Новый пользователь",
            message: state.getDialogPage().getMessageText(),
        }
        state.getDialogPage()._dialogs.push(newMessage);
        state.getDialogPage()._newMessageText = "";

    }

    else if (action.type === 'UPDATE-NEW-MESSAGE') {
        state.getDialogPage()._newMessageText = action.newText;
    }
    return state;
}

export default dialogReducer;