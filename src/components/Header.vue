<template>
  <header id="header">
    <div class="container">
      <div class="col-xs-12 col-sm-12 col-md-12">

        <div id="header-app">
          <div class="col-xs-12 col-sm-8">
            <span class="logo glyphicon glyphicon-music"></span>
            <h3>
              <router-link :to="{name: 'iMain'}">
                {{ sitename }}
              </router-link>
            </h3>
          </div>
          <div class="col-xs-12 col-sm-4 pos_absolute header-right">
            <router-link
              active-class="active"
              tag="button"
              class="btn btn-lg"
              :to="{name: 'Form'}"
            >
              <span class="glyphicon glyphicon-shopping-cart">{{cartItemCount}}</span>
            </router-link>

          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  /* eslint-disable */
  export default {
    name: 'my-header',
    data(){
      return{
        sitename: 'My shop'
      }
    },
    props:['cartItemCount'],
    methods: {
      showCheckout(){
        this.$router.push({name: 'Form'});
      }
    }
  }
</script>
<style scoped>
  a{
    text-decoration: none;
    color: #000;
  }
  .router-link-exact-active{
    color: #000;
  }
</style>

