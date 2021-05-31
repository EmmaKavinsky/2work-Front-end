<template>
    <div class="app">
      <div class="container-fluid " >
          <h2 class="text-center mt-5 mb-3" >{{$t('last_profiles')}}</h2>
           <div class="row">
               <div class="col-md-12">
                   <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col-md-4" v-for="user in users.slice(0,3)" :key="user.id">
                                        <div class="card profiles ">
                                           <div class="img-container ">
                                                <img src="../assets/user.png" alt="">
                                           </div>
                                            <div class="card-body mt-3 d-flex flex-column">
                                               <div class="name-container">
                                                   <h3 class="text-center">{{user.firstName}} <span>{{user.lastName}}</span></h3>
                                               </div>
                                               <div class="btn-container d-flex justify-content-center mt-4">
                                                   <a href="" class="btn btn-primary">Visit profile</a>
                                               </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-md-4" v-for="user in users.slice(3,6)" :key="user.id">
                                        <div class="card profiles ">
                                           <div class="img-container ">
                                                <img src="../assets/user.png" alt="">
                                           </div>
                                            <div class="card-body mt-3 d-flex flex-column">
                                               <div class="name-container">
                                                   <h3 class="text-center">{{user.firstName +" " +user.lastName}}</h3>
                                               </div>
                                               <div class="btn-container d-flex justify-content-center mt-4">
                                                   <a href="" class="btn btn-primary ">Visit profile</a>
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
      </div>
    </div>
</template>

<script>
    import { mapActions,mapGetters} from 'vuex'
    export default {
        computed:{
            ...mapGetters(['users'])
        },
        methods:{
            ...mapActions(['getUsers'])
        },
        
        created(){
            this.getUsers()
            console.log(this.users)
        }
        
    }
</script>

<style scoped>
    .profiles{
        position: relative;
        background-color: cadetblue;
        height: 300px;
        padding: 30px;
        border-radius: 10px;
    }
    .img-container{
        background-color: aliceblue;
        height: 70px;
        width: 70px;
        border-radius: 50%;
        position: relative;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);

    }
    .profiles img{
        width: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    h3{
        font-size: 25px;
    }
    .btn{
        padding: 10px 25px;
        border-radius: 15px;
    }
</style>
