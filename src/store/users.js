import Api from '../api'

const state = {
    users: []
}

const getters = {
    users: state => state.users
}

const actions={
    getUsers({commit}){
        return Api.auth.getUsers()
        .then(resp => {
            commit('setUsers' , resp.data.success)
            return resp
        })
    }
}

const mutations = {
    setUsers(state,val){
        state.users=val.users
    }
}
export default {
    state, 
    getters,
    mutations,
	actions
}