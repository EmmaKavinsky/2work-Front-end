<template>
    <div class="app">
        <div class="x-90">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel" >
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/slide.png" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h1 class="m-lg-5 font-weight-bolder">{{ $t('slide1_label') }}</h1>
                            <p>{{ $t('slide1_text') }}</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/slide2.png" class="d-block  w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block ">
                            <h1 class="m-lg-5 font-weight-bolder">{{ $t('slide2_label') }}</h1>
                            <p>{{ $t('slide2_text') }}</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/slidep3.png" class="d-block w-image w-100 h-auto" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h1 class="m-lg-5 font-weight-bolder">{{ $t('slide3_label') }}</h1>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "Slider",
}
</script>

<style scoped>
h5{
    font-size: 2rem;
    font-weight:bold;
}
p{
    font-size: 1.2rem;
    font-weight: 500;
}
.carousel-item > img{
    height: 500px;
}

</style>
