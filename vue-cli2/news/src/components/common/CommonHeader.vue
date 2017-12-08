<template>
  <div class="header">
    <h1 class="name">喵喵新闻</h1>
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
  .header{
    z-index: 2;
    width: 100%;
    position: fixed;
    top: 0;
  }
  .name{
    height: 1rem;
    background: #6D84B4;
    color: #ffffff;
    text-align: center;
    line-height: 1rem;
    font-size: 0.5rem;
  }

</style>
