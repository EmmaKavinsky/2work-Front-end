<template>
    <div>
        <footer class="footer pb-0 mb-0 justify-content-center text-light font-weight-bold " >
         <div class="row my-3 justify-content-center py-5">
             <div class="col-11">
                 <div class="row ">
                     <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                        <img src="../assets/logo3.png" alt="" class="logo">
                        <p class="card-title mt-lg-4">{{$t('footer_2work_quote')}}</p>
                        <div v-if="!isAuthenticated" class="mt-5">
                            <h6 class="center">{{$t('footer_2work_invite')}}</h6>
                            <router-link to="/register" class="btn btn-info m-lg-4 rounded-pill ml-md-3 register-btn ml-lg-n1 font-weight-bold">
                            {{$t('register_title')}}
                            </router-link>
                        </div>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                             <h6 class="mb-3 mb-lg-4 bold-text "><b>{{$t('footer_menu')}}</b></h6>
                             <p class="ml-0"><router-link to="/home" class="p-route" aria-current="page">{{$t('home_footer')}}</router-link></p>
                             <p class="ml-0"><router-link to="/contact" class="p-route" aria-current="page">{{$t('footer_contact')}}</router-link></p>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                          <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                         <p class="mb-1">40000, MARRAKECH</p>
                         <p>{{$t('Morocco')}}</p>
                     </div>
                 </div>
                 <div class="row ">
                     <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end"></div>
                        <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end">
                         <h6 class="mt-0 mt-0 text-muted bold-text"><b>CYO TEAM</b></h6><h6>2work.community@gmail.com</h6>
                     </div>
                 </div>
             </div>
         </div>
         <p class="card-header text-center bg-dark down">© {{ new Date().getFullYear() }} Copyright. All Rights Reserved
             <ul>
                 <li><img src="../assets/facebook.png" alt="fb" class="m-lg-2"></li>
                 <li><img src="../assets/linkdin.png" alt="linkdin" class="m-lg-2"></li>
                 <li><img src="../assets/twitter.png" alt="twitter" class="m-lg-2"></li>
             </ul>

         </p>
     </footer>
        
    </div>
 
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


<style>
.footer {
     overflow: hidden;
     background: hsl(0, 9%, 42%);
     color:#cecaca !important;
     margin-bottom: 0;
     padding-bottom: 0;
     margin-top: 8rem;
 }
 .bold-text {
     color: #989c9e !important
 }
 
 .p-route{
     color:#cecaca !important;
 }

 .mt-55 {
     margin-top: calc(50px + (60 - 50) * ((100vw - 360px) / (1600 - 360))) !important
 }
 .logo{
     width:150px;
     height: 60px;
     margin-left: -8px;
 }
 .register-btn{
     color:#cecaca ;
     background-color: rgb(56, 59, 59);
     border-color:rgb(56, 59, 59);
 }
 ul {
     list-style: none;
     padding-left: 0;
 }

 .down ul li {
     display: inline-block;
 }
 .down{
     margin-bottom: -20px;
 }
</style>
