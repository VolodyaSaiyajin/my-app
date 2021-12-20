let SUBSCRIBE_TO_USER = "SUBSCRIBE_TO_USER";
let UNSUBSCRIBE_TO_USER = "UNSUBSCRIBE_TO_USER"
let SET_USERS = "SET_USERS"
let SELECTED_USER_COUNT = "SELECTED_USER_COUNT"
let SET_FETCHING = "SET_FETCHING"

let initialState = {
    _users: [],
    pageSize: 15,
    totalUsersCount: 500,
    _selectedUsersCount: 1,
    fetching: false,
}
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
            return {
                ...state,
                _users: action.users
            };
        }

        case SELECTED_USER_COUNT: {
            return {
                ...state,
                _selectedUsersCount: action.selectedCount

            }
        }
        case SET_FETCHING: {
            return {
                ...state,
                fetching: action.setFetching
            }
        }

        default:
            return state;
    }
}

export const setUsersAction = (users) => ({type: SET_USERS, users});
export const subscribeUser = (userId) => ({type: SUBSCRIBE_TO_USER, userId});
export const unsubscribeUser = (userId) => ({type: UNSUBSCRIBE_TO_USER, userId});
export const setSelectedUsers = (selectedCount) => ({type: SELECTED_USER_COUNT, selectedCount})
export const setFetching = (setFetching) => ({type: SET_FETCHING, setFetching})

export default searchUserReducer;

