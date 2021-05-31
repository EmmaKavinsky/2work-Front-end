<template>
    <div class="app">
        <div class="container mt-5">
            <h2 class="text-center font-weight-bold ">{{$t('How_it_works')}}</h2>
            <div class="row">
                <div class="col-sm m-3 " >
                    <h1 class="text-left display-3 font-weight-bold text-muted text-center ">01</h1>
                    <h6 class="text-center mt-5">{{$t('Create_account')}}</h6>
                    <p class=" text-center text-muted font-weight-normal">
                        {{$t('how_it_works_register')}}
                    </p>

                </div>
                <div class="col-sm mt-3 ">
                    <h1 class="text-left display-3 font-weight-bold text-muted text-center">02</h1>
                    <h6 class="text-center mt-5">{{$t('Post_offers')}}</h6>
                    <p class=" text-center text-muted font-weight-normal">
                        {{$t('how_it_works_annonces')}}
                    </p>
                </div>
                <div class="col-sm mt-3 ">
                    <h1 class="text-left display-3 font-weight-bold text-muted text-center">03</h1>
                    <h6 class="text-center mt-5">{{$t('Post_demands')}}</h6>
                    <p class=" text-center text-muted font-weight-normal">
                        {{$t('how_it_works_demands')}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HowItWorks'
    }
</script>

<style>


</style>
