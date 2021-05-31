<template>
    <div class="app">
        <el-container>
            <div class="container" v-if="singleAnnonce">
                <h1 class="text-center">{{$t('update-annonce_title')}}</h1>
                <div class="d-flex justify-content-center">
                    <form class="w-100" @submit.prevent="submit">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label>{{$t('annonce_title')}}</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model.trim="annonce.title"
                                    :class="{'is-invalid': $v.annonce.title.$error }"
                                />
                                <span class="invalid-feedback" v-if="!$v.annonce.title.required">
                                    {{$t('annonce_required')}}
                                </span>
                            </div>
                            <div class="form-group col-md-6">
                                <label>{{$t('annonce_location')}}</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model.trim="annonce.location"
                                    :class="{'is-invalid': $v.annonce.location.$error }"
                                 />
                                <span class="invalid-feedback" v-if="!$v.annonce.title.required">
                                    {{$t('annonce_required')}}
                                </span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>{{$t('annonce_description')}}</label>
                            <textarea
                                class="form-control"
                                rows="3"
                                v-model.trim="annonce.description"
                                :class="{'is-invalid': $v.annonce.description.$error }"
                            >
                            </textarea>
                            <span class="invalid-feedback" v-if="!$v.annonce.title.required">
                                {{$t('annonce_required')}}
                            </span>
                        </div>
                        <div class="form-group">
                            <label>{{$t('annonce_profile_searched')}}</label>
                            <textarea
                                class="form-control"
                                rows="3"
                                v-model="annonce.profileSearched"
                            >
                            </textarea>
                        </div>
                        <div class="form-group">
                            <label>{{$t('annonce_advatages')}}</label>
                            <textarea
                                class="form-control"
                                rows="3"
                                v-model="annonce.advantages"
                            >
                            </textarea>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label>{{$t('annonce_type')}}</label>
                                <select
                                    class="form-control"
                                    v-model="annonce.type"
                                    required
                                >
                                    <option value="f-t" selected>{{$t('full_time')}}</option>
                                    <option value="h-t">{{$t('half_time')}}</option>
                                    <option value="f">{{$t('freelancer')}}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label>{{$t('annonce_salary')}}</label>
                                <input type="number" v-model="annonce.salary" class="form-control">
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button v-if="!loader" type="submit" class="btn btn-primary" :disabled="this.$v.$invalid">
                                {{$t('update-annonce')}}
                            </button>
                            <el-loader v-if="loader" />

                        </div>
                    </form>
                </div>
            </div>
            <div class="row justify-content-center" v-else>
                <h3>{{ $t('Notfound') }}</h3>
            </div>
        </el-container>
    </div>
</template>

<script>
import Container from '../components/container.vue';
import Loader from '../components/loader.vue';
import {required} from 'vuelidate/lib/validators';
import { mapActions, mapGetters } from "vuex";

export default {
    name: 'UpdateAnnonce',
    data(){
        return{
            annonce:{
                title:"",
                location:"",
                description:"",
                profileSearched:"",
                advantages:"",
                type:"",
                salary:"",
            },
            loader: false
        }
    },
    validations:{
        annonce:{
            title:{
                required
            },
            location:{
                required
            },
            description:{
                required
            },
            type:{
                required
            }
        }
    },
    components:{
        'el-container': Container,
        'el-loader': Loader
    },
    watch: {
        singleAnnonce() {
            let keys = Object.keys(this.annonce)
            keys.map(key => {
                this.annonce[key] = this.singleAnnonce[key]
            })
        }
    },
    mounted() {
        this.getAnnonce(this.$route.params.id)

        let keys = Object.keys(this.annonce)
        keys.map(key => {
            this.annonce[key] = this.singleAnnonce[key]
        })
    },
    methods:{
        ...mapActions(['deleteAnnonce','updateAnnonce', 'getAnnonce']),

        submit(){
            this.$v.$touch();
            if (this.$v.$invalid) return;
            this.loader = true
            this.updateAnnonce({annonce: this.annonce, id: this.$route.params.id})
            .then(() => {
                this.$toast.success(this.$t('annonce_posted_successfuly'))
                this.loader = false
                this.$router.push('/offers-annonces')
            })
        },

    },
    computed: {
        ...mapGetters(["singleAnnonce"])
    },
}
</script>

<style>

</style>
