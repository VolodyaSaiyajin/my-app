import { rerenderEntireTree } from '../index';


let store = {

    _state: {
        _profilePage: {
            _posts: [
                { id: 1, name: "Иван Гевельев", post: "Приветствую. Столкнулся с проблемой в необходимости оптимизации виртуалки, т.к. макОС работает с дикими тормозами и откровенно неисправно, много программ отображаются неверно. Но самое печальное - невозможность банально проверить свою программу в xCode путем запуска эмулятора. Причем пустой проект эмулятор спустя 5-10 минут таки загружает, но уже загруженный функциями, циклами, кнопками и прочим не хочет, программа вылетает. Периодически возникают ошибки, скрины их кидаю ниже. С подобными техническими причинами я не могу себя реализовать полноценно в свифте, поэтому прошу помощи.", likesCont: "47" },
                { id: 1, name: "Данила Котова", post: "Привет брот", likesCont: "47" },
                { id: 2, name: "Марина Кузко", post: "Ямарина", likesCont: "47" },
                { id: 3, name: "Владимир Тильт", post: "Я тебя убью", likesCont: "47" },
                { id: 4, name: "Владислав Харитонов", post: "Тишка привет", likesCont: "47" }

            ],
            _newPostText: "",

            getPosts() {
                return this._posts;
            },

        },

        rerenderEntireTree() {
            debugger;
            console.log('дерево обновлено')
        },

        _dialogsPage: {
            _dialogs: [
                { id: 1, name: "Данила Котова", age: "47" },
                { id: 2, name: "Марина Кузко", age: "14" },
                { id: 3, name: "Владимир Тильт", age: "47" },
                { id: 4, name: "Владислав Харитонов", age: "47" }
            ],

            _messages:
                [
                    { id: 1, name: "Данила Котова", message: "Привет брот" },
                    { id: 2, name: "Марина Кузко", message: "Ямарина" },
                    { id: 3, name: "Владимир Тильт", message: "Я тебя убью" },
                    { id: 4, name: "Владислав Харитонов", message: "Тишка привет" }
                ],

        },

        getProfilePage() {
            return this._profilePage;
        },

        getDialogPage() {
            return this._dialogsPage;
        }

    },

    getState() {
        return this._state;
    },

    rerenderEntireTree() {
        console.log("tree was updated");
    },

    addPost() {
        let newPost = {
            id: 5,
            name: "Кинчь",
            post: store._state._profilePage._newPostText,
            likesCont: "0"
        }
        store._state._profilePage._posts.push(newPost);
        store._state._profilePage._newPostText = '';
        store.rerenderEntireTree(this._state);
    },
    updateNewPost(newText) {
        store._state._profilePage._newPostText = newText;
        rerenderEntireTree();

    },

    subscribe(observer) {
        this.rerenderEntireTree = observer;
    }
}

export default store;
window.store = store;