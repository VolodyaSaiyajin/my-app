const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_ID = "SET_USER_ID"


let initialState = {
    _posts: [
        {
            id: 1,
            name: "Иван Гевельев",
            postMessage: "Приветствую. Столкнулся с проблемой в необходимости оптимизации виртуалки, т.к. макОС работает с дикими тормозами и откровенно неисправно, много программ отображаются неверно. Но самое печальное - невозможность банально проверить свою программу в xCode путем запуска эмулятора. Причем пустой проект эмулятор спустя 5-10 минут таки загружает, но уже загруженный функциями, циклами, кнопками и прочим не хочет, программа вылетает. Периодически возникают ошибки, скрины их кидаю ниже. С подобными техническими причинами я не могу себя реализовать полноценно в свифте, поэтому прошу помощи.",
            likesCount: 47
        },
        {id: 1, name: "Данила Котова", postMessage: "Привет брот", likesCount: 47},
        {id: 2, name: "Марина Кузко", postMessage: "Ямарина", likesCount: 47},
        {id: 3, name: "Владимир Тильт", postMessage: "Я тебя убью", likesCount: 47},
        {id: 4, name: "Владислав Харитонов", postMessage: "Тишка привет", likesCount: 47}

    ],
    _newPostText: "",
    _profile: null,
    _profileId: null
}

const postingReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                name: "Новый пользователь",
                postMessage: state._newPostText,
                likesCount: 0
            };
            return {
                ...state,
                _posts: [...state._posts, newPost],
                _newPostText: ''
            };
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                _newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            debugger
            return {
                ...state,
                _profile: action.profile
            }

        }
        case SET_USER_ID: {
            return {
                _profileId: action.userId
            }
        }

        default:
            return state
    }
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const addPostActionToState = () => ({type: ADD_POST});
export const updateNewPostActionToState = (newText) => ({type: UPDATE_NEW_POST, newText});
export const setUserId = (userId) => ({type: SET_USER_ID, userId});


export default postingReducer;