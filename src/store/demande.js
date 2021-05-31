import Api from '../api'

const state = {
	demandes: [],
    totalDemandes:0,
	userDemandes: [],
	demande:{}
}

const getters = {
    demandes : state => state.demandes,
    totalDemandes : state => state.totalDemandes,
    userDemandesList : state => state.userDemandes
}

const actions = {
    createDemande({commit}, data) {
		return Api.demande.createDemande(data)
		.then(resp => {
			commit('setDemande', resp.data.success)
			return resp
		})
	},
    getDemandes({commit}, page) {
		return Api.demande.getDemandes(page)
		.then(resp => {
			commit('getDemandes', resp.data.success)
		})
	},
    userAnnonces({commit}) {
		return Api.annonce.userDemandes()
		.then(resp => {
			commit('userDemandes', resp.data.success)
		})
	}
}

const mutations = {
	setDemandes(state, val) {
		state.demandes.push(val.demande)
	},
	getDemandes(state, val) {
		state.demandes = val.demandes.data
		state.totalDemandes = val.demandes.last_page
	},
	userAnnonces(state, val) {
		state.userDemandes = val.demandes
	}
}
export default {
    state, 
    getters,
    mutations,
	actions
}