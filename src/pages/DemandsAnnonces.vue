<template>
    <el-container>
        <div class="demands-page">
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
                                <h1   style="margin-top:20px">{{$t('job_demands')}}</h1>
                                <div class="text-center" style="margin-top:40px;" v-if="isAuthenticated">
                                    <router-link to="/add-demande" class="btn btn-outline-info ml-2 mr-2 rounded-pill ">
                                    {{$t('Add_my_demand')}}
                                    </router-link>
                                </div>
                            </div>
                            <div class="row justify-content-center" v-if="demande.length > 0" >
                                <div class="col-md-3 mb-5" v-for="(demande, key) in this.demandes" :key="key">
                                    <div class="card">
                                        <img class="card-img-top" src="../assets/jobFind.png" alt="Card image cap">
                                        <div class="card-body">
                                            <h5 class="card-title">{{ demande.title }}</h5>
                                            <p class="card-text">{{ demande.description }}</p>
                                            <p class="card-text">Type:{{ demande.type }}</p>
                                            <p class="card-text">Cat:{{ demande.category }}</p>
                                            <p class="card-text">Loc:{{ demande.location }}</p>
                                            <a href="#" class="btn btn-primary">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="page-navigation" v-if="totalDemandes > 1">
                                <nav>
                                    <ul class="pagination pagination-lg justify-content-center">
                                        <li class="page-item" v-if="currentPage > 1">
                                            <a href="#" class="page-link" aria-label="Previous" @click="getPage(--currentPage)">
                                                <span aria-hidden="true">◁</span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li class="page-item" v-for="(page, key) in totalDemandes" :key="key">
                                            <a href="#" class="page-link" @click="getPage(page)">{{ page }}</a>
                                        </li>
                                        <li class="page-item" v-if="currentPage < totalDemandes">
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
                {type: 'Full-time',value:'f-t'}, 
                {type:'Half-time',value:'h-t'},
                {type:'Freelance',value:'f'}

            ],
            categories :[
                {cat:'Education',value:'c-e'},{cat:'Technology',value:'c-t'}, 
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
            demande:{
                title:"",
                location:"",
                description:"",
                tel:"",
                longdesription:"",
            }
        }
    },
    components:{
        "el-container" : Container,
        Places

    },
    mounted() {
        this.getDemandes(this.currentPage)
        console.log(this.demandes)
    },
    methods: {
        ...mapActions(['getDemandes']),

        getPage(page) {
            this.currentPage = page
            console.log(page);
            this.getDemandes(this.currentPage)
        },
        setAddressFilter (val) {
            this.location= val.value
            this.demandesFilter
        },
    },

    computed: {
        ...mapGetters(['demandes', 'totalDemandes', 'isAuthenticated', 'profile']),

        demandesFilter() {
            let data = []
            let keys = Object.keys(this.filter)
            let isNull = true
            let dataTosearch = this.demandes
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
                let searchLocalisation = isNull ? this.demandes : data
                isNull = false
                data = []
                searchLocalisation.map(item => {
                    if(item['location'] == this.location) {
                        data.push(item)
                    }
                })
            }
            if(isNull) return this.demandes
            return data
        }
    },
    watch: {
        filter: {
            handler () {
                this.demandesFilter
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
