<template>
  <div class="home-class">
    <common-header></common-header>
    <div class="list">
      <home-list v-for="(obj,index) in HomeList" :key="obj.index" :title="obj.title" :time="obj.time"
                 :column="obj.column" :index="index"></home-list>
    </div>
    <common-footer></common-footer>
  </div>
</template>


<script>
  import HomeList from "./HomeList.vue"
  import CommonHeader from "../common/CommonHeader.vue"
  import CommonFooter from "../common/CommonFooter.vue"
  import Axios from "axios"

  export default{
    data(){
      return{
        HomeList:[]

      }
    },
    mounted(){
      Axios.get(API_PROXY + "http://api.shenjian.io/?appid=873cdd3c5a69f7da4575ab48ac3668dd")
        .then((res)=>{
          this.HomeList=res.data.data;
//          console.log(res.data.data;
        });

    },
    components:{
      HomeList,
      CommonHeader,
      CommonFooter

    }
  }
</script>


<style scoped>
  .list{
    margin: 1.5rem 0 1rem 0;
    position: relative;
    width: 100%;
  }

</style>


