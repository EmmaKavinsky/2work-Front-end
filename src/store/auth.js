import Api from '../api'
import i18n from '../i18n'
import router from '../router'
import Vue from 'vue'


const state = {
	token: '',
	user: {}
}


const getters = {
	isAuthenticated: state => !!state.token,
	authToken: state => state.token,
	profile: state => state.user
}

const actions = {
	register({commit}, user) {
		return new Promise((resolve, reject) => {
			Api.auth.register(user)
			.then(resp => {
				commit("authSuccess", resp.data.success)
				Vue.$toast.success(i18n.t('register_success'))
				router.push('home')
				resolve(resp)
			})
			.catch(err => {
				Vue.$toast.error(i18n.t('register_error'))
				reject(err)
			})
		})
	},
	login({commit}, user) {
		return new Promise((resolve, reject) => {
			return Api.auth.login(user)
				.then(resp => {
				commit("authSuccess", resp.data.success)
				Vue.$toast.success(i18n.t('login_success'))
				router.push('home')
				resolve(resp)
			})
			.catch(err => {
				Vue.$toast.error(i18n.t('login_error'))
				reject(err)
			})
		})
	},

	logout({commit}) {
		commit("authLogout")
		router.push('home')
		Vue.$toast.success(i18n.t('logout_success'))
	},

	updateProfile({commit}, data) {
		return Api.auth.updateProfile(data)
		.then(resp => {
			commit("updateProfile", resp.data.success)
		})
	},

	updatePassword({commit}, data) {
		return Api.auth.updatePassword(data)
		.then(resp => {
			commit("updateProfile", resp.data.success)
		})
	}
}


const mutations = {
	authRegiterSuccess(state, val) {
		state.token = val.token
		state.user = val.user
	},
	authSuccess(state, val) {
		state.token = val.token
		state.user = val.user
	},
	authLogout(state) {
		state.token = ''
	},
	updateProfile(state, val) {
		state.user = val.user
	}
}

export default {
    state,
    getters,
    mutations,
    actions
};
