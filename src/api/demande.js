import instance from './_instance'

export default {
    createDemande (data){
        return instance
            .post('demande/create',data)
    },
    getDemandes(page) {
        return instance
			.post(`demande/get?page=${page}`)
    },
    userDemandes () {
		return instance
			.post(`demande/user-get`)
	}
}