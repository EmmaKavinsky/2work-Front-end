<template>
    <el-container>
        <div class="block-profile pt-5 pb-5">
			<div class="container">
				<div class="row">
					<div class="col-md-12 mx-auto">
                        <!-- Profile widget -->
                        <div class="bg-white shadow rounded overflow-hidden">
                            <div class="px-4 pt-0 pb-4 cover">
                                <div class="media align-items-end profile-head">
                                    <div class="profile mr-3">
                                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" class="rounded mb-2 img-thumbnail">
                                        <div class="d-flex">
                                            <button href="#" class="btn btn-outline-dark ml-2 mr-2 pt-2 pb-2 pl-3 pr-3">{{$t("contact_profile")}}</button>                                      
                                            <router-link v-if="isAuthenticated" to="/edit-profile" class="btn btn-outline-dark ml-2 mr-2 pt-2 pb-2 pl-3 pr-3">{{$t("Profile_edit")}}</router-link>
                    
                                        </div>
                                        
                                    </div>
                                    <div class="media-body mb-5 text-white">
                                        <h4 class="mt-0 mb-0">{{profile.firstName + " " + profile.lastName}}</h4>
                                        <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i>
                                         <!--   {{$t("user_city")}}-->
                                        </p>
                                    </div>
                                </div>
                            </div>
        

                            <div class="d-flex justify-content-center mt-5 mb-4">
                                <button class="btn btn-outline-dark ml-2 mr-2 pt-2 pb-2 pl-3 pr-3" :class="{'active': !showMyAnnonces}" @click="showMyAnnonces = false">
                                    {{ $t('profile_showdetail') }}
                                </button>
                                <button class="btn btn-outline-dark ml-2 mr-2 pt-2 pb-2 pl-3 pr-3" :class="{'active': showMyAnnonces}" @click="showMyAnnonces = true" v-if="userAnnoncesList.length > 0">
                                    {{ $t('profile_annonces') }}
                                </button>
                            </div>

                            <div class="my-information" v-if="!showMyAnnonces">
                                <!-- About-->
                                <div class="px-4 py-3 about">
                                    <h5 class="mb-0">{{$t("about")}}</h5>
                                    <div class="p-4 rounded shadow-sm bg-light">
                                        <p class="font-italic mb-0">{{$t('job')}}</p>
                                        <p class="font-italic mb-0">{{$t('information1')}}</p>
                                        <p class="font-italic mb-0">{{$t('information2')}}</p>
                                    </div>
                                </div>

                                <!-- skills timeline -->
                                <div class="px-4 py-3">
                                    <h4>{{$t('experience_title')}}</h4>
                                    <div class="p-4 rounded shadow-sm bg-light">
                                        <ul class="timeline">
                                            <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                                                <div class="timeline-arrow"></div>
                                                <h2 class="h5 mb-0">{{$t('title_section1')}}</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>{{$t('date_section4')}}</span>
                                                <p class="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                                            </li>
                                            <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                                                <div class="timeline-arrow"></div>
                                                <h2 class="h5 mb-0">{{$t('title_section2')}}</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>{{$t('date_section2')}}</span>
                                                <p class="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper.</p>
                                                <p class="text-small mt-2 font-weight-light">Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam! Deleniti.</p>
                                            </li>

                                            <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                                                <div class="timeline-arrow"></div>
                                                <h2 class="h5 mb-0">{{$t('title_section3')}}</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>{{$t('date_section3')}}</span>
                                                <p class="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                                                <p class="text-small mt-2 font-weight-light">Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam ipsam necessitatibus incidunt, explicabo.</p>
                                            </li>
                                        </ul><!-- End -->

                                    </div>
                                </div>
                                <!--Formation or section skills num 2-->
                                <div class="px-4 py-3">
                                    <h4>{{$t('formation_title')}}</h4>
                                    <div class="p-4 rounded shadow-sm bg-light">
                                        <ul class="timeline">
                                            <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                                                <div class="timeline-arrow"></div>
                                                <h2 class="h5 mb-0">{{$t('title_section1')}}</h2>
                                                <span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>{{$t('date_section4')}}</span>
                                                <p class="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                                            </li>
                                            <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                                                <div class="timeline-arrow"></div>
                                                <h2 class="h5 mb-0">{{$t('title_section2')}}</h2>
                                                <span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>{{$t('date_section2')}}</span>
                                                <p class="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper.</p>
                                                <p class="text-small mt-2 font-weight-light">Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam! Deleniti.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- Gallerie-->
                                <div class="py-4 px-4">
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <h5 class="mb-0">
                                            {{$t('work_gallery')}}
                                        </h5>
                                        <router-link to="" class="btn btn-link text-muted" data-toggle="modal" data-target="#galleryModal">{{$t('show_all')}}</router-link>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6 mb-2 pr-lg-1"><img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"></div>
                                        <div class="col-lg-6 mb-2 pl-lg-1"><img src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"></div>
                                        <div class="col-lg-6 pr-lg-1 mb-2"><img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" class="img-fluid rounded shadow-sm"></div>
                                        <div class="col-lg-6 pl-lg-1"><img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"></div>
                                    </div>
                                </div>

                                <!-- Modal for Gallery -->
                                <div class=" modal fade" id="galleryModal" tabindex="-1" aria-labelledby="gallModalLabel" aria-hidden="true" >
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="gallModalLabel">{{$t('modal_title')}}</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <!-- Gallery slide-->
                                                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                                    <ol class="carousel-indicators">
                                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                                    </ol>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" class="d-block w-100" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" class="d-block w-100" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" class="d-block w-100" alt="">
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <!-- modal Contact -->

                            <!-- fin modal contact-->
                            <div class="my-annonces" v-else>
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <h4>{{$t('profile_myannonces')}}</h4>
                                    </div>
                                    <div class="p-4 rounded shadow-sm bg-light">
                                        <ul class="timeline">
                                            <li class="timeline-item bg-white rounded ml-3 p-4 shadow" v-for="(annonce, key) in userAnnoncesList" :key="key">
                                                <div class="timeline-arrow"></div>
                                                <div class="d-flex justify-content-between">
                                                    <h2 class="h5 mb-0">{{annonce.title}}</h2>
                                                    <div class="actions">
                                                        <button 
                                                             class="btn btn-outline-dark mr-1 ml-1" 
                                                             data-toggle="modal" 
                                                             data-target="#annonceModal"
                                                              @click="deleteId = annonce.id"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                                            </svg>
                                                        </button>
                                                        <router-link 
                                                            type="button" 
                                                            class="btn btn-outline-dark mr-1 ml-1" 
                                                            name="button"
                                                            :to="{name: 'UpdateAnnonce', params: {id: annonce.id}}"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                                            </svg>
                                                        </router-link>
                                                    </div>
                                                </div>
                                                <span class="small text-gray">
                                                    {{annonce.create_at}}
                                                </span>
                                                <p class="text-small mt-2 font-weight-light">
                                                    {{annonce.description}}
                                                </p>
                                            </li>
                                        </ul>
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
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Profile",
    data() {
        return  {
            showMyAnnonces: false,
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
    mounted() {
        this.userAnnonces()
    },
    methods: {
        ...mapActions(["userAnnonces","deleteAnnonce"]),
        deleteannonce(){
            
            this.deleteAnnonce({annonce: this.annonce, id: this.deleteId})
            .then(() => {
                this.$toast.success(this.$t('annonce_deleted_successfuly'))             
                this.deleteId = ''
            })
            
        }
    },
    computed: {
        ...mapGetters(["isAuthenticated", "profile", "userAnnoncesList"]),
    },
	components:{
		"el-container" : Container
	}
}
</script>

<style scoped>
    .block-profile {
		background: #1603427a;
		height: 100%;
	}
	.profile-head {
        transform: translateY(5rem)

    }
    .cover{
        background-image: url("https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80");
        background-size: cover;
        background-repeat: no-repeat;

    }
    ul.timeline {
        list-style-type: none;
        position: relative;
    }
    ul.timeline:before {
        content: ' ';
        background: #d4d9df;
        display: inline-block;
        position: absolute;
        left: 29px;
        width: 2px;
        height: 100%;
        z-index: 400;
    }
    ul.timeline > li {
        margin: 20px 0;
        padding-left: 20px;
    }
    ul.timeline > li:before {
        content: ' ';
        background: white;
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 3px solid #22c0e8;
        left: 20px;
        width: 20px;
        height: 20px;
        z-index: 400;
    }
    .modal-dialog {
        max-width: 600px;
    }
    .block-profile{
        background-color: cadetblue;
    }

</style>
