<template>
  <div class="spec">
    <!--<div v-html="https://news.qq.com/a/20171208/021793.htm"></div>-->
    <iframe :src="url" frameborder="0"></iframe>
    <!--<iframe id="ifr" v-show="false" :src="url" frameborder="0"></iframe>-->
  </div>
</template>


<script>
  import HomeList from "./HomeList.vue"
  import Axios from "axios"

  export default{
    data(){
      return {
        url: ""

      }
    },
    mounted(){
      Axios.get(API_PROXY + "http://api.shenjian.io/?appid=873cdd3c5a69f7da4575ab48ac3668dd")
        .then((res) => {
          this.url = res.data.data[this.$route.params.index].url;
//          console.log(res.data.data);
        });
    },
    components: {
      HomeList

    }
  }
</script>


<style scoped>
  .list {
    margin: 1.5rem 0 1rem 0;
    position: relative;
    width: 100%;
  }

</style>


