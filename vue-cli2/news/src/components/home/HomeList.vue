<template>
  <div class="home-list">
   <ul>
   <li><router-link :to="`/homespec/${index}`">
     <li class="home-img">
            <img src="/static/641.jpg">
            <div>
            <p>{{title}}</p>
            <span>{{column}}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{time}}</span>
            </div>
        </li>
   </router-link></li>

   </ul>
  </div>
</template>


<script>
  export default{
  props:['title','time','column','index']
 }
</script>


<style scoped>
.home-list{
    width: 100%;
    z-index:1
  }
  .home-img{
    height: 2.6rem;
    border-bottom: 0.01rem solid #d6d6d6;
    padding:0 0.3rem;

  }
  .home-img img{
    height:2.1rem;
    width:2.1rem;
    float:left;
  }
  .home-img p{
    height:2rem;
  }
  .home-img span{
    float:right;
  }


</style>
