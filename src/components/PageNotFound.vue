<template>
  <div class="container">
    <my-header :cartItemCount="cartItemCount"></my-header>
    <transition name="bounce">
      <div class="center">
        <h1> This page not Found! Please try again :) </h1>
        <img src="static/images/404-not-found-png-5.png">
      </div>
    </transition>


  </div>
</template>

<script>
    import MyHeader from './Header.vue';
    export default {
        name: "PageNotFound",
        props:['cartItemCount'],
        components: {MyHeader},
    }
</script>
<style scoped>
  .bounce-enter-active{
    animation: bounceIn 2s;
  }
  .bounce-leave-active{
    animation: bounceIn 2s reverse;
  }
  @keyframes bounceIn {
    0%{
      transform: scale(0.1);
      opacity: 0;
    }
    60%{
      transform: scale(1.2);
      opacity: 1;
    }
    0%{
      transform: scale(1);
    }
  }
</style>
