<template>
    <el-container>
        <div class="offers-page">
                <div class="container-fluid">
                    <div class="row" style="margin-top:50px">
                        <div class="col-lg-2">
                            <form action="#" class="mt-lg-5  mr-4 col shadow p-lg-2 bg-white">
                                <h1>{{$t('filters')}}</h1>
                                <hr>
                                <h5 style="margin-bottom:15px">{{$t('offers_type')}}</h5>
                                <div class="mt-lg-4">
                                    <ul class="list-unstyled">
                                       <li  v-for="(type,key) in types" :key="key">
                                       <input type="checkbox"
                                        v-model="filter.type"
                                        :value="type.value"
                                        :checked="filter.type.includes(type.value)"

                                         />

                                        {{type.type}}
                                       </li>
                                    </ul>
                                </div>
                                <br>
                                <h5 style="margin-bottom: 15px">{{$t('offers_cat')}}</h5>
                                <div class="mt-lg-4">
                                    <ul class="list-unstyled">
                                        <li  v-for="(category,key) in categories" :key="key">
                                        <input type="checkbox"
                                        v-model="filter.category"
                                        :value="category.value"
                                        :checked="filter.category.includes(category.value)"
                                        />
                                        {{category.cat}}
                                       </li>
                                      </ul>
                                </div>
                                <h5 class="mt-lg-5" style="margin-bottom: 15px"> {{$t('location')}} </h5>
                                <div class="w-100" >
                                <places
                                    :options="options"
                                    @change="val => setAddressFilter(val) "
                                />
                                </div>

                            </form>
                            <br>

                        </div>
                        <div class="col-lg-10">
                            <div class="d-flex justify-content-between mb-4 ml-5">
                                <h1   style="margin-top:20px">{{$t('job_offers')}}</h1>
                                <div class="text-center" style="margin-top:40px;" v-if="isAuthenticated">
                                    <router-link to="/add-annonce" class="btn btn-outline-info ml-2 mr-2 rounded-pill ">
                                    {{$t('Add_my_announcement')}}
                                    </router-link>
                                </div>
                            </div>
                            <div class="row justify-content-center" v-if="annonces.length > 0" >
                                <div class="col-md-3 mb-5" v-for="(annonce, key) in annoncesFilter" :key="key">
                                    <div class="card">
                                        <img class="card-img-top" src="../assets/job2.jpg" alt="Card image cap">
                                        <div class="card-body">
                                            <h5 class="card-title">{{ annonce.title }}</h5>
                                            <p class="card-text">{{ annonce.description }}</p>
                                            
                                            <p class="card-text">{{ annonce.location }}</p>
                                            <a href="#" class="btn btn-primary">Read more</a>
                                            <router-link v-if="isAuthenticated && profile.id === annonce.user_id" :to="{name: 'UpdateAnnonce', params: {id: annonce.id}}" class="btn btn-primary mt-2 mb-2">{{$t('update_annonce')}}</router-link>
                                            <button
                                                v-if="isAuthenticated && profile.id === annonce.user_id"
                                                class="btn btn-outline-dark mr-1 ml-1"
                                                data-toggle="modal"
                                                data-target="#annonceModal"
                                                @click="deleteId = annonce.id"
                                            >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                                    </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Modal -->
                            <div class="modal fade" id="annonceModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">{{$t('titre_modal_delete')}}</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>{{$t('delete_message')}}</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button @click="deleteId = ''" type="button" class="btn btn-secondary" data-dismiss="modal">{{$t('cancel')}}</button>

                                            <button @click="deleteannonce()" type="button"  class="btn btn-danger" data-dismiss="modal">{{$t('delete_annonce')}}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="page-navigation" v-if="total > 1">
                                <nav>
                                    <ul class="pagination pagination-lg justify-content-center">
                                        <li class="page-item" v-if="currentPage > 1">
                                            <a href="#" class="page-link" aria-label="Previous" @click="getPage(--currentPage)">
                                                <span aria-hidden="true">◁</span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li class="page-item" v-for="(page, key) in total" :key="key">
                                            <a href="#" class="page-link" @click="getPage(page)">{{ page }}</a>
                                        </li>
                                        <li class="page-item" v-if="currentPage < total">
                                            <a href="#" class="page-link" aria-label="Next" @click="getPage(++currentPage)">
                                                <span aria-hidden="true">▷</span>
                                                <span class="sr-only">Next></span>
                                            </a>
                                        </li>
                                    </ul>
                               </nav>

                            </div>
                        </div>
                    </div>
                </div>
        </div>

    </el-container>
</template>
<script>
import Container from "../components/container.vue"
import { mapGetters, mapActions } from "vuex";
import Places from 'vue-places';

export default {
    data() {
        return {
            currentPage: 1,
            types:[
                {type: 'Full-time',value:'f-t'}, // i cannot translate the types inside array  !!
                {type:'Half-time',value:'h-t'},
                {type:'Freelance',value:'f'}

            ],
            categories :[
                {cat:'Education',value:'c-e'},{cat:'Technology',value:'c-t'}, //Same for category value
                {cat:'Finance & Business',value:'c-f'},{cat:'House Labor',value:'c-h'},
                {cat:'Medical',value:''},{cat:'Agriculture',value:'c-ag'},
                {cat:'Art & Craft',value:'c-a'},{cat:'Other Services',value:'c-o'},

            ],
            filter: {
                type:[],
                category:[]
            },
            location:'',
            options:{
                appId: "pl0LYUQQQIMV",
                apiKey: "d5c388ca0166f87b386a163270b7f335",
            },
            annonce:{
                title:"",
                location:"",
                description:"",
                profileSearched:"",
                advantages:"",
                type:"",
                salary:"",
            },
            deleteId: ''
        }
    },
    components:{
        "el-container" : Container,
        Places

    },
    mounted() {
        this.getAnnonces(this.currentPage)
        console.log(this.annonces)
    },
    methods: {
        ...mapActions(['getAnnonces','deleteAnnonce']),

        getPage(page) {
            this.currentPage = page
            console.log(page);
            this.getAnnonces(this.currentPage)
        },
        setAddressFilter (val) {
            this.location= val.value
            this.annoncesFilter
        },
        deleteannonce(){

            this.deleteAnnonce({annonce: this.annonce, id: this.deleteId})
            .then(() => {
                this.$toast.success(this.$t('annonce_deleted_successfuly'))
                this.deleteId = ''
            })
        }

    },

    computed: {
        ...mapGetters(['annonces', 'total', 'isAuthenticated', 'profile']),

        annoncesFilter() {
            let data = []
            let keys = Object.keys(this.filter)
            let isNull = true
            let dataTosearch = this.annonces
            keys.map(key => {
                if(this.filter[key].length > 0) {
                    isNull = false
                    data = []
                    dataTosearch.map(item => {
                        if(this.filter[key].includes(item[key])) {
                            let exist = data.filter(element => element.id == item.id)
                            if(exist.length === 0) {
                                data.push(item)
                            }

                        }
                    })
                    dataTosearch = data
                }
            })
            if(this.location) {
                let searchLocalisation = isNull ? this.annonces : data
                isNull = false
                data = []
                searchLocalisation.map(item => {
                    if(item['location'] == this.location) {
                        data.push(item)
                    }
                })
            }
            if(isNull) return this.annonces
            return data
        }
    },
    watch: {
        filter: {
            handler () {
                this.annoncesFilter
            },
            deep: true
        }
    }
}
</script>
<style>
.card{
    margin-top:15;
    scroll-margin-bottom:30px;
}
.page-navigation{
    margin: 30px;
}




</style>
