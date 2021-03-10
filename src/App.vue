<template>
  <div id="app">
    <router-view/>
    <!-- nav header-->
    <div class="header">
      <nav class="flex items-center">
          <div class="logo">logo</div>
          <ul class="menu">
              <li v-on:click="renderProduct">Product</li>
              <li v-on:click="renderService">Service</li>
          </ul>
      </nav>
    </div>


    <!-- image slides -->
    <!-- <Nav /> -->
    <keep-alive>
      <component v-bind:is="component" />
    </keep-alive>
    
   
    <!-- <div >
      <Product/>
    </div>
    <div>
      <Service/>
    </div> -->
  </div>
</template>

<script>

import Home from "./components/Home.vue";
import Product from "./components/Product.vue";
import Service from "./components/Service.vue";

export default {
  name: 'App',
  components:{
    Home,
    Product,
    Service
  },
  data(){
    return{
    imagesHome: [],
    component:"Home",
    }
  },


  methods:{
    renderService(){
      if(this.component === Service){
        this.component = Product
      }
      else{
       this.component = Service
      }
    },
    renderProduct(){
         if(this.component === Product){
        this.component = Service
      }
      else{
        this.component = Product
      }
    }
  },
    mounted() {
    const accessToken = "A3F7DkBC723hfY2m0QUuB290UqyWu_1WGQpY-KpVBZg";
    axios({
      method: "get",
      url: "https://api.unsplash.com/photos?page=1&per_page=29",
      headers: {
        Authorization: `Client-ID ${accessToken}`,
      },
    })
      .then((response) => {
        // console.log(response.data);
        this.images = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  
}
</script>

<style>
    .header{
      background-color: teal;
      width:100%;
      height:60px;
      display: flex;
      justify-content: center;
      align-items: center;
      color:#fff;
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
