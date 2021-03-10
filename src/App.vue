<template>
  <div id="app">
    <router-view/>
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
    Service,
  },
}
</script>

<style scoped>

</style>
