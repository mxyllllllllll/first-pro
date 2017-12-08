<template>
  <div class="footer">
    <ul>
      <li>首页</li>
      <li>视频</li>
      <li>我的</li>
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
  .footer{
    height    : 1rem;
    background: #d6d6d6;
    position  : fixed;
    bottom    : 0;
    width     : 100%;
  }
  .footer ul{
    display: flex;
  }
  .footer li{
    flex       : 1;
    text-align : center;
    line-height: 1rem;
    color: #1d1d1d;
  }

</style>
