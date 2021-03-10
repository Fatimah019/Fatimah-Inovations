<template>
  <div id="app">
    <router-view/>
    <!-- nav header-->
    <div class="w-100 bg-green-400 h-60 header">
      <nav class="container align-center space-between">
          <div class="logo"><span v-on:click="goHome"><router-link to="/" class="f-s-12 sec-color-font no-deco-link">Logo</router-link></span></div>
          <ul class="list-no-style align-center">
              <li v-on:click="renderProduct"><router-link to="/product" class="f-s-12 sec-color-font no-deco-link m-r-l-5">Product</router-link></li>
              <li v-on:click="renderService"><router-link to="/service" class="f-s-12 sec-color-font no-deco-link m-r-l-5">Service</router-link></li>
          </ul>
      </nav>
    </div>
    <!-- image slides -->
    <div class="w-100 m-t-100 m-b-20">
      <vue-image-slider :images="imagesHome" :intervalVal=6000 :height=300 />
    </div>
    <keep-alive>
      <component v-bind:is="component" />
    </keep-alive>
  </div>
</template>

<script>

import Home from "./components/Home.vue";
import Product from "./components/Product.vue";
import Service from "./components/Service.vue";
import VueImageSlider from "vue-image-slider";
// import "./assets/styles/style.css";

export default {
  name: 'App',
  components:{
    Home,
    Product,
    Service,
    VueImageSlider
  },
  data(){
    return{
    imagesHome: [
        'https://res.cloudinary.com/dycyotaya/image/upload/v1579602435/IMG_3934_roerob.jpg',
        'https://res.cloudinary.com/dycyotaya/image/upload/v1579602293/php-1_vmp6ze.svg',
        'https://res.cloudinary.com/dycyotaya/image/upload/v1579602292/natuedesktop_okwazw.jpg',
        'https://res.cloudinary.com/dycyotaya/image/upload/v1579602285/littleangel_brkigk.jpg'
    ],
    component:"Home",
    }
  },


  methods:{
    renderService(){
       this.component = Service
    },
    renderProduct(){
        this.component =Product
    },
    goHome(){
        if(this.component === Product || this.component === Service){
        this.component = Home
      }
    }
  },
}
</script>

<style>
/* #app{
  background-color: rgb(243, 234, 234);
  margin-left:0;
} */
.header{
  position: absolute;
  top:0;
  left:0;
}
.flex {
  display: flex;
}
.align-center {
  display: flex;
  align-items: center;
}
.justify-center {
  display: flex;
  justify-content: center;
}
.space-between {
  display: flex;
  justify-content: space-between;
}
.auto {
  display: flex;
  margin: auto;
}
.list-no-style{
  list-style-type: none;
}
.no-deco-link{
  text-decoration: none;
}
/* colors */
.pri-color-font {
  color: #000;
}
.sec-color-font {
  color: #fff;
}
.bg-green-400 {
  background-color: rgb(3, 82, 3);
}
.f-s-12 {
  font-size: 100%;
}
.w-100 {
  width: 100%;
}
.h-60{
  height:60px;
}
.w-100{
  width:100%;
}
.w-80 {
  width: 80%;
}
.m-t-100{
  margin-top:100px;
}
.m-r-l-5{
  margin-right: 5px;
  margin-left: 5px;
}
.m-b-20{
  margin-bottom: 20px;
}
.container {
  width: 80%;
  margin: auto;
}

</style>
