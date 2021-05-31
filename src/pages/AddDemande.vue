<template>
    <div id="app">
        <el-container>
            <div class="container">
                <h1 class="text-center">{{$t('add_demande_title')}}</h1>
                <div class="d-flex justify-content-center">
                    <form class="w-100" @submit.prevent="postdemande">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label>{{$t('demande_title')}}</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model.trim="demande.title"
                                    :class="{'is-invalid': $v.demande.title.$error }"
                                />
                            </div>
                    
                            <div class="form-group col-md-6">
                                <label>{{$t('demande_category')}}</label>
                                <select
                                    class="form-control"
                                    v-model="demande.activity"
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
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label>{{$t('demande_location')}}</label>
                                <places
                                    :options="options"
                                    v-model="demande.location"
                                    @change="val => setAddress(val) "
                                >
                                </places>
                            </div>
                            <div class="form-group col-md-6">
                                <label>{{$t('demande_tel')}}</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model.trim="demande.tel"
                                    :class="{'is-invalid': $v.demande.tel.$error }"
                                />
                            </div>
                            
                        </div>
                        <div class="form-group">
                            <label>{{$t('demande_description')}}</label>
                            <textarea
                                class="form-control"
                                rows="3"
                                v-model.trim="demande.description"
                                :class="{'is-invalid': $v.demande.description.$error }"
                            >
                            </textarea>
                        </div>
                        <div class="form-group">
                            <label>{{$t('demande_longdescription')}}</label>
                            <textarea
                                class="form-control"
                                rows="5"
                                v-model.trim="demande.longdescription" 
                                :placeholder="$t('placeholder')"
                            >
                            </textarea>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button v-if="!loader" type="submit" class="btn btn-primary" :disabled="this.$v.$invalid">
                                {{$t('post_demande')}}
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
import places from 'vue-places'
import container from '../components/container'
import {required,numeric} from 'vuelidate/lib/validators';
import Loader from '../components/loader.vue';
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            demande:{
                title:'',
                activity:'',
                location:'',
                tel:'',
                description:'',
                longdescription:''
            },
            loader:false,
            options:{
                appId: "pl0LYUQQQIMV",
                apiKey: "d5c388ca0166f87b386a163270b7f335",

            }
        }

    },
    validations:{
        demande:{
            title:{
                required
            },
            activity:{
                required
            },
            location:{
                required
            },
            tel:{
                required,
                numeric
            },
            description:{
                required
            }
        }

    },
    components:{
        'el-container': container,
        'el-loader':Loader,
        places
    },
    methods:{
        ...mapActions(['createDemande']),

        postdemande(){
            this.$v.$touch();
            if (this.$v.$invalid) return;
            this.loader=true;
            this.createDemande(this.demande)
            .then(() => {
                this.$toast.success(this.$t('demande_posted_successfuly'))
                this.loader = false
                this.$router.push('/demands-annonces')
            }).catch(()=>{
                this.$toast.error('error');
                this.loader=false;
            })
        }
    }
}
</script>

<style>

</style>