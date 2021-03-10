<template>
    <div class="header">
      <nav class="flex items-center">
          <div class="logo"><span v-on:click="goHome">logo</span></div>
          <ul class="menu">
              <li v-on:click="renderProduct"><router-link to="/product">product</router-link></li>
              <li v-on:click="renderService"><router-link to="/service">Service</router-link></li>
          </ul>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
