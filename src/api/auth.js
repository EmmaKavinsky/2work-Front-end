import instance from './_instance'


export default {

	register (user) {
		return instance
			.post('user/register', user)
	},
	login (user) {
		return instance
			.post('user/login', user)
	},
	updateProfile (data) {
		return instance
			.post('update-profile', data)
	},
	updatePassword (data) {
		return instance
			.post('update-password', data)
	},
	getUsers(){
		return instance
			.get('user/getUsers')
	}

}
