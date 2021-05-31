<template>
  <el-container>
    <div class="home-page">
      <el-slider />
      <el-cards />
      <el-how-it-works />
    </div>
  </el-container>
</template>

<script>
import Container from "../components/container.vue";
import Slider from "../components/slider.vue";
import Cards from "../components/Cards.vue";
import HowItWorks from "../components/how-it-works.vue";

export default {
  name: "App",
  components: {
    "el-slider": Slider,
    "el-container": Container,
    "el-cards": Cards,
    "el-how-it-works": HowItWorks,
  },
 
  
};
</script>
