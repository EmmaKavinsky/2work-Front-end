<template>
    <div class="app">
        <el-container>
            <div class="container">
                <h1 class="text-center">{{$t('add_annonce_title')}}</h1>
                <div class="d-flex justify-content-center">
                    <form class="w-100" @submit.prevent="postAnnonce">
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
                                    {{$t('title_required')}}
                                </span>
                            </div>
                            <div class="form-group col-md-6">
                                <label>{{$t('annonce_location')}}</label>
                                <places
                                    :options="options"
                                    @change="val => setAddress(val) "
                                >
                                </places>
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
                            <span class="invalid-feedback" v-if="!$v.annonce.description.required">
                                {{$t('description_required')}}
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
                       <div class="form-row">
                            <div class="form-group col-md-6">
                                <label>{{$t('annonce_category')}}</label>
                                <select
                                    class="form-control"
                                    v-model="annonce.category"
                                    required
                                >
                                    <option value="c-t" selected>{{$t('Category_technology')}}</option>
                                    <option value="c-a">{{$t('Category_art&craft')}}</option>
                                    <option value="c-e">{{$t('Category_education')}}</option>
                                    <option value="c-m">{{$t('Category_medical')}}</option>
                                    <option value="c-f">{{$t('Category_finance&buisness')}}</option>
                                    <option value="c-h">{{$t('Category_house_labor')}}</option>
                                    <option value="c-ag">{{$t('Category_agriculture')}}</option>
                                    <option value="c-o">{{$t('Category_other_services')}}</option>
                                </select>
                            </div>
                       </div>

                        <div class="d-flex justify-content-center">
                            <button v-if="!loader" type="submit" class="btn btn-primary rounded-lg" :disabled="this.$v.$invalid">
                                {{$t('post-annonce')}}
                            </button>
                            <el-loader v-if="loader" />

                        </div>
                    </form>
                </div>
            </div>
        </el-container>
    </div>
</template>

<script>
import Container from '../components/container.vue';
import Loader from '../components/loader.vue';
import {required} from 'vuelidate/lib/validators';
import { mapActions } from "vuex";
import places from 'vue-places'

export default {
    name: 'AddAnnonce',
    data(){
        return{
            annonce:{
                title:"",
                description:"",
                location:"",
                profileSearched:"",
                advantages:"",
                type:"",
                category:"",
                salary:"",
            },
            options:{
                appId: "pl0LYUQQQIMV",
                apiKey: "d5c388ca0166f87b386a163270b7f335",

            },
            loader: false
        }
    },
    validations:{
        annonce:{
            title:{
                required
            },
            description:{
                required
            },
            location:{
                required

            },
            type:{
                required
            },
            category:{
                required
            }
        }
    },
    components:{
        'el-container': Container,
        'el-loader': Loader,
        places
    },

    methods:{
        ...mapActions(['createAnnonce']),

        postAnnonce(){
            this.$v.$touch();
            if (this.$v.$invalid) return;
            this.loader = true
            this.createAnnonce(this.annonce)
            .then(() => {
                this.$toast.success(this.$t('annonce_posted_successfuly'))
                this.loader = false
                this.$router.push('/offers-annonces')
            }).catch((error)=>{
                this.$toast.error('erreur');
                this.loader=false;
                console.log(error);
            })
        },
        setAddress (val) {
            this.annonce.location= val.value
            console.log(val)
        }
    }
}
</script>

<style>

</style>
