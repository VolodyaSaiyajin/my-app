let SUBSCRIBE_TO_USER = "SUBSCRIBE_TO_USER";
let UNSUBSCRIBE_TO_USER = "UNSUBSCRIBE_TO_USER"
let SET_USERS = "SET_USERS"

let initialState = {
    _users: []
}
debugger
const searchUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE_TO_USER: {
            return {
                ...state,
                _users: state._users.map(mappedUsers => {
                    if (mappedUsers.id === action.userId) {
                        return {...mappedUsers, subscribe: true}
                    }
                    return mappedUsers;
                })

            };
        }

        case UNSUBSCRIBE_TO_USER: {
            return {
                ...state,
                _users: state._users.map(mappedUsers => {
                        if (mappedUsers.id === action.userId) {
                            return {...mappedUsers, subscribe: false}
                        }
                        return mappedUsers;
                    }
                )
            }
        }

        case SET_USERS: {
            debugger
            return {
                ...state,
                _users: [...state._users, ...action.users]
            };
        }

        default:
            return state;
    }
}

export const setUsersAction = (users) => ({type: SET_USERS, users});
export const subscribeUser = (userId) => ({type: SUBSCRIBE_TO_USER, userId});
export const unsubscribeUser = (userId) => ({type: UNSUBSCRIBE_TO_USER, userId});
export default searchUserReducer;

