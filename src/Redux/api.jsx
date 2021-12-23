import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "c3866cc5-f94b-418c-8bf9-d24d15c3a24c"
    }
});


export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data;
            })
    },

    unfollowUser(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },

    followUser(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},)
    },

    authMe() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)

    },

    getProfile(userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    },

}