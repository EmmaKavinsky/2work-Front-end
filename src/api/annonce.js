import instance from './_instance'


export default {

	createAnnonce (data) {
		return instance
			.post('annonce/create', data)
	},

	getAnnonces (page) {
		return instance
			.post(`annonce/get?page=${page}`)
	},

	userAnnonces () {
		return instance
			.post(`annonce/user-get`)
	},

	getAnnonce (id) {
		return instance
		.post(`annonce/get/${id}`)
	},

	updateAnnonce(data) {
		return instance
		.post(`annonce/update/${data.id}`, data.annonce)
	},
	
	deleteAnnonce(data) {
		return instance
		.post(`annonce/delete/${data.id}`, data.annonce)
	}
}
