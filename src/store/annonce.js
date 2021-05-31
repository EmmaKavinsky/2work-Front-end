import Api from '../api'


const state = {
	annonces: [],
	total: 0,
	userAnnonces: [],
	annonce: {}
}


const getters = {
	annonces: state => state.annonces,
	total: state => state.total,
	userAnnoncesList: state => state.userAnnonces,
	singleAnnonce: state => state.annonce
}

const actions = {
	createAnnonce({commit}, data) {
		return Api.annonce.createAnnonce(data)
		.then(resp => {
			commit('setAnnonce', resp.data.success)
			return resp
		})
	},

	getAnnonces({commit}, page) {
		return Api.annonce.getAnnonces(page)
		.then(resp => {
			commit('getAnnonces', resp.data.success)
		})
	},

	userAnnonces({commit}) {
		return Api.annonce.userAnnonces()
		.then(resp => {
			commit('userAnnonces', resp.data.success)
		})
	},

	getAnnonce({commit}, id) {
		return Api.annonce.getAnnonce(id)
		.then(resp => {
			commit('getAnnonce', resp.data.success)
		})
		.catch(error => {
			commit('getAnnonce', {annonce: false})
			return error
		})
	},

	updateAnnonce({commit}, data) {
		return Api.annonce.updateAnnonce(data)
		.then(resp => {
			commit('updateAnnonce', resp.data.success)
		})
		
	},

	deleteAnnonce({commit}, data){
		return Api.annonce.deleteAnnonce(data)
		.then(resp => {
			console.log(resp)
			commit('deleteAnnonce' , data)
			
		})
	}
	
}


const mutations = {
	setAnnonce(state, val) {
		state.annonces.push(val.annonce)
	},
	getAnnonces(state, val) {
		state.annonces = val.annonces.data
		state.total = val.annonces.last_page
	},
	userAnnonces(state, val) {
		state.userAnnonces = val.annonces
	},

	getAnnonce(state, val) {
		state.annonce = val.annonce
	},

	deleteAnnonce(state, val) {
		state.annonces = state.annonces.filter(item => item.id  !== val.id)
	}
	
}

export default {
    state,
    getters,
    mutations,
    actions
};
