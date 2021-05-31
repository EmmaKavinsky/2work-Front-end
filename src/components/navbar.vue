<template>
	<div class="col-md-3 col-xs-12  nav-bar pt-5">
		<ul class="nav flex-column">
			<router-link to="/public-profile" class="nav-link">
				{{$t('profile_visite_profile')}}
			</router-link>
			<router-link to="/edit-profile" class="nav-link">
				{{$t('profile_editprofile')}}
			</router-link>
			<router-link to="/setting-password" class="nav-link">
				{{$t('profile_settingpassword')}}
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "navbar"
	}
</script>


<style scoped>
	.navbar {
	
		height: 300px
	}
</style>
