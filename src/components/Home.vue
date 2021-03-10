<template>
<div>
  <Top/>
  <div class="container m-t-b-20">
    <h2>Merchant</h2>
    <div class="flex grid-col-4">
        <div v-for="item in images" :key="item.user.first_name" class="m-t-e-10">
          <div class="bg-black-100 p-t-e-10 text-center">
            <img :key="item.id"
                :src="item.urls.full"
                class="w-80"
            />
          </div>
          <div class="bg-white-100 p-t-b-10 p-l-r-5 text-center">
              <p>{{ item.user.first_name }} {{ item.user.last_name }}</p>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import Top from "./Top.vue";
import axios from 'axios'
import dotenv from "dotenv"
dotenv.config()
export default {
  name: 'Home',
  components:{
    Top,
  },
  data: () => ({
    images: [],
  }),

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
        this.images = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex {
  display: flex;
}
.text-center{
    text-align: center;
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
.bg-black-100{
    background-color: #000;
}
.bg-white-100{
    background-color: rgba(190, 148, 148, 0.1);
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
.w-80 {
  width: 80%;
}
.container {
  width: 80%;
  margin: auto;
}
.m-t-e-10{
    margin:10px;
}
.m-t-b-20{
    margin-top:20px;
    margin-bottom: 20px;
}
.p-t-e-10{
    padding: 10px;
}
.p-t-b-10{
    padding-top:10px;
    padding-bottom: 10px;
}
.p-l-r-5{
    padding-right: 5px;
    padding-left: 5px;
}
.grid-col-4{
    display: grid;
    grid-template-columns: repeat(4, minmax(23%, 1fr));
}

@media screen and (max-width:780px) {
    .grid-col-4{
        display: grid;
        grid-template-columns: repeat(3, minmax(33%, 1fr));
    }
}
@media screen and (max-width:600px) {
    .grid-col-4{
        display: grid;
        grid-template-columns: repeat(2, minmax(48%, 1fr));
    }
}
@media screen and (max-width:480px) {
    .grid-col-4{
        display: grid;
        grid-template-columns: repeat(autofit, minmax(0, 1fr));
    }
}

</style>
