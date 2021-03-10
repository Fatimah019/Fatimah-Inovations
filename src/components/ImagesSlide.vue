<template>
  <div>
    <div class="img-slider">
      <vue-image-slider :images="imagesHome" :intervalVal=6000 :height=300 :width="1100" />
    </div>
  </div>
</template>

<script>
import VueImageSlider from "vue-image-slider"
export default {
  name: 'ImagesSlide',
  components:{
     VueImageSlider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .img-slider{
       width:80%;
       margin:auto;
       margin-top:20px;
       margin-bottom: 20px;
    }
</style>
