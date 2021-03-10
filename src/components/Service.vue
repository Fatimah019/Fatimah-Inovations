<template>
  <div class="merchant">
    <h2>Service Merchant</h2>
    <div class="flex all-items">
        <div v-for="item in images" :key="item.user.first_name" class="product-res">
          <div class="bg-black">
            <img :key="item.id"
                :src="item.urls.full"
            />
          </div>
          <div class="bg-green">
              <p>{{ item.user.first_name }} {{ item.user.last_name }}</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import dotenv from "dotenv"
dotenv.config()
export default {
  name: 'Service',
  data: () => ({
    images: [],
  }),

  mounted() {
    const accessToken = "A3F7DkBC723hfY2m0QUuB290UqyWu_1WGQpY-KpVBZg";
    axios({
      method: "get",
      url: "https://api.unsplash.com/photos?page=1&per_page=29",
      headers: {
        Authorization: `Client-ID ${process.env.VUE_APP_ACCESSTOKEN}`,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .merchant{
        width:80%;
        margin: auto;
    }
    .bg-black{
        background-color: black;
        padding:10px;
        color:#fff;
        width:80%;
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
