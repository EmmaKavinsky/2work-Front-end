<template>
	<el-container>
		<div class="block-profile pt-5 pb-5">
			<div class="container">
				<div class="row">
					<el-navbar />
					<div class="col-md-9 col-xs-12 body-cart body-cart-profil">
						<div class="card">
							<div class="card-body">
								<h1 class="text-center mt-5">{{ $t("edit_profile_title") }}</h1>
								<form class="w-100" @submit.prevent="submit">
									<div class="form-row">
										<div class="form-group col-md-6">
											<label for="inputName">{{ $t("edit_profile_firstName") }}</label>
											<input type="text" class="form-control"
												v-model.trim="user.firstName"
												:class="{ 'is-invalid': $v.user.firstName.$error }" />
											<div class="invalid-feedback">
												<span v-if="!$v.user.firstName.required">
													{{ $t("edit_profile_required") }}</span>
											</div>
										</div>

										<div class="form-group col-md-6">
											<label for="inputName">{{ $t("edit_profile_lastName") }}</label>
											<input type="text" class="form-control"
												v-model.trim="user.lastName" :class="{
											'is-invalid': $v.user.lastName.$error,
											}" />
											<div class="invalid-feedback">
												<span v-if="!$v.user.lastName.required">
													{{ $t("edit_profile_required") }}</span>
											</div>
										</div>
									</div>

									<div class="form-group">
										<label for="inputEmail">{{ $t("edit_profile_email") }}</label>
										<input type="email" class="form-control"
											:placeholder="$t('edit_profile_exemple')"
											v-model.trim="user.email"
											:class="{'is-invalid': $v.user.email.$error, }" />
										<div class="invalid-feedback">
											<span v-if="!$v.user.email.required">
												{{ $t("edit_profile_required") }}
											</span>
											<span v-if="!$v.user.email.email">
												{{ $t("edit_profile_error_email") }}
											</span>
										</div>
									</div>

									<div class="form-row">
										<div class="form-group col-md-6">
											<label for="inputGender">{{ $t("edit_profile_gender") }}</label>
											<select class="form-control" v-model="user.gender"
												:class="{ 'is-invalid': $v.user.gender.$error }">
												<option value="m">{{ $t("edit_profile_male") }}</option>
												<option value="f">{{ $t("edit_profile_female") }}</option>
											</select>
											<div class="invalid-feedback">
												<span class="text-danger" v-if="!$v.user.gender.required">
													{{ $t("edit_profile_required") }}
												</span>
											</div>
										</div>
										<div class="form-group col-md-6">
											<label for="birthday">{{ $t("edit_profile_birthday") }}</label>
											<input type="date" class="form-control" v-model="user.birthday"
												required />
										</div>
									</div>

									<div class="d-flex justify-content-center">
										<button v-if="!loader" type="submit" class="btn btn-primary pr-5 pl-5"
											:disabled="this.$v.$invalid">
											{{ $t("edit_profile_submit") }}
										</button>
										<el-loader v-if="loader" />
									</div>

								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</el-container>
</template>

<script>
	import Container from '../components/container.vue';
	import Loader from '../components/loader.vue';
	import Navbar from '../components/navbar.vue';
	import {
		required,
		email
	} from "vuelidate/lib/validators";
	import { mapGetters, mapActions } from "vuex";

	export default {
		name: "EditProfile",
		data() {
			return {
				user: {
					firstName: "",
					lastName: "",
					email: "",
					gender: "",
					acceptTerms: false,
					birthday: ""
				},
				loader: false
			}
		},
		validations: {
			user: {
				firstName: {
					required
				},
				lastName: {
					required
				},
				email: {
					required,
					email
				},
				gender: {
					required
				},
				birthday: {
					required
				}
			}
		},
		mounted() {
			let keys = Object.keys(this.user)
			keys.map(key => {
				this.user[key] = this.profile[key]
			})
		},
		methods: {
			...mapActions(['updateProfile']),

			submit() {
				this.$v.$touch();
				if (this.$v.$invalid) return;
				this.loader = true
				this.updateProfile(this.user)
				.then(() => {
					this.$toast.success(this.$t('editprofile_success'))
					this.loader = false
				})
			}
		},
		computed: {
			...mapGetters(["profile"]),
		},
		components: {
			"el-container": Container,
			"el-navbar": Navbar,
			'el-loader': Loader
		}
	}
</script>

<style scoped>
	.block-profile {
		background: #dddddd7a;
		height: 100vh;
	}

	.body-cart-profil {
		height: 600px;
	}

	.card {
		width: 100%;
		height: 100%
	}

	.user-avatar {
		border-radius: 100% !important;
		height: 100px;
	}

	.card-text {
		text-align: justify;
	}
	
</style>
