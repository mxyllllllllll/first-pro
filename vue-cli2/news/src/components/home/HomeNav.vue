<template>
  <div class="nav">
   <ul>
     <li><router-link to="/home/home1">军事</router-link></li>
     <li><router-link to="/home/home2">娱乐</router-link></li>
     <li><router-link to="/home/home3">财经</router-link></li>
     <li><router-link to="/home/home4">科技</router-link></li>
     <li><router-link to="/home/home5">教育</router-link></li>
     <li><router-link to="/home/home6">旅游</router-link></li>
     <li><router-link to="/home/home7">股票</router-link></li>

   </ul>
  </div>
</template>


<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>


<style scoped>
  .nav{
    width: 100%;
    position: fixed;
    top: 1rem;

    background: #ffffff;
    z-index: 2;
  }
  .nav ul{
    width: 100%;
    display: flex;
  }
  .nav li{
    flex: 1;
    list-style: none;
    width:14.28% ;
    font-size: 0.3rem;
    text-align: center;
    border-bottom: 0.01rem solid #CCCCCC;
  }
  .nav a {
    color:#1d1d1d;
  }

</style>
