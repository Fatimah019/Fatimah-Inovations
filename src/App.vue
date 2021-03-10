<template>
  <div id="app">
    <router-view/>
    <!-- nav header-->
    <div class="bg-teal-500 h-screen">
      <nav class="flex items-center">
          <div class="logo"><span v-on:click="goHome"><router-link to="/" class="links">Logo</router-link></span></div>
          <ul class="menu">
              <li v-on:click="renderProduct"><router-link to="/product" class="links">Product</router-link></li>
              <li v-on:click="renderService"><router-link to="/service" class="links">Service</router-link></li>
          </ul>
      </nav>
    </div>
    <!-- image slides -->
    <div class="img-slider">
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
import "./assets/css/style.css";

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
    .header{
      background-color: rgb(21, 128, 0);
      width:100%;
      height:60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    nav{
      width:80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    nav ul{
      padding:0;
      margin:0;
      display: flex;
    }
    nav ul li{
      margin:0 10px;
      list-style-type: none;
      color:#fff;
    }
    .links{
      /* color:#fff; */
      text-decoration: none;
    }
    .img-slider{
       width:80%;
       margin:auto;
       margin-top:20px;
       margin-bottom: 20px;
 
    }
    
    .bg-black{
        background-color: black;
        padding:10px;
        color:#fff;
        width:10%;
        text-align: center;
    }
    .bg-green{
        background-color: green;
        padding:5px;
        color:#fff;
        padding:2px 10px;
        width:80%;
        text-align: center;
    }
    img{
        width:80%;
    }
    .product-res{
      margin:10px;
      
    }
    .all-items{
       display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
</style>
