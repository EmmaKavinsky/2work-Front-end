<template id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">
                <img src="../assets/logo4.png" width="150" height="60" alt="">
            </router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse navitems" id="navbarSupportedContent">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page">{{$t('home')}}</router-link>
                    </li>
                    <li class="nav-item" v-if="isAuthenticated">
                         <router-link to="/add-annonce" class="nav-link">{{$t('pub_offre')}}</router-link>
                    </li>
                    <li class="nav-item" v-if="isAuthenticated">
                        <router-link to="/add-demande" class="nav-link">{{$t('pub_demande')}}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/offers-annonces" class="nav-link">{{$t('list_offres')}}</router-link>
                    </li>
                     <li class="nav-item">
                        <router-link to="/demands-annonces" class="nav-link">{{$t('list_demandes')}}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link" aria-current="page">{{$t('home_contact')}}</router-link>
                    </li>
                </ul>
            </div>

            <div class="d-flex justify-content-center last-part-nav">
                <router-link v-if="!isAuthenticated" to="/register" class="btn btn-outline-success me-2 mr-2 rounded-pill" id="btn_register">
                    {{$t('register_title')}}
                </router-link>
                <router-link v-if="!isAuthenticated" to="/login" class="btn btn-outline-secondary ml-2 mr-2 rounded-pill">
                    {{$t('login_title')}}
                </router-link>
                <!-- profile icon-->
                <button v-if="isAuthenticated" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbar-list-4" v-if="isAuthenticated">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle avatar" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="https://image.flaticon.com/icons/png/512/747/747545.png" width="40" height="40" class="rounded-circle">
                            </a>
                            <div class="dropdown-menu avatar-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <router-link to="/public-profile" class="dropdown-item av">Dashboard</router-link>
                                <router-link to="/edit-profile" class="dropdown-item av">Edit Profile</router-link>
                                <a class="dropdown-item av" href="#" @click="logout">Log Out</a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="dropdown ml-2">
                    <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ $t('header_lan_' + selectedLang) }}
                    </button>
                    <div class="dropdown-menu lang-dropdown" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item " type="button" @click="setLanguage('fr')">{{ $t('header_lan_fr') }}</a>
                        <a class="dropdown-item " type="button" @click="setLanguage('en')">{{ $t('header_lan_en') }}</a>
                        <a class="dropdown-item " type="button" @click="setLanguage('ar')">{{ $t('header_lan_ar') }}</a>
                    </div>
                </div>

            </div>
        </div>
    </nav>
</template>


<script>
    import { mapActions, mapGetters } from "vuex";

    export default {
        methods: {
            ...mapActions(["logout"]),

            setLanguage(lang) {
                localStorage.setItem("language", lang);
                this.$router.go()
            }
        },
        computed: {
            ...mapGetters(["isAuthenticated"]),

            selectedLang() {
                return localStorage.getItem("language");
            }
        }
    }
</script>
<style scoped>
    @media (max-width: 768px) {
        .last-part-nav {
            width: 100%
        }
    }
    .lang-dropdown{
        min-width: 4rem;
    }
    .avatar{
        display: inline;
    }
    .avatar-dropdown{
        min-width: 5rem;
    }
    .av{
        padding: .25rem 0.5rem;
    }
    .nav-item{
        font-size: 1.1rem;
    }
   
</style>
