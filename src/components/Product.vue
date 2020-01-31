<template>
  <div class="container">
    <my-header></my-header>
    <h1>This is a product id {{$route.params.id}}</h1>
    <div class="row">
      <div class="col-md-5 col-md-offset-0">
        <div class="col-xs-12 col-sm-12">
          <figure>
            <img style="max-width: 100%" class="product" v-bind:src="product.image">
          </figure>
        </div>

      </div>
      <div class="col-md-7 col-md-offset-0 description">
        <h1 class="title">{{product.title}}</h1>
        <p v-html="product.description"></p>
        <p class="price">{{product.price}}</p>
        <button @click="edit">Edit Product</button>
        <router-view></router-view>
      </div>
    </div>
  </div>


</template>

<script>
    import MyHeader from "./Header.vue";
    export default {
        name: "Product",
      components: {MyHeader},
      data(){
          return{
            product: ''
          }
      },
      methods:{
        edit(){
          this.$router.push({name: 'Edit'})
        }
      },
      created: function() {
        axios.get('/static/products.json')
          .then((response) =>{
            this.product = response.data.products.filter(
              data => data.id == this.$route.params.id)[0]
            this.product.image = '/' + this.product.image;
          })
      }
    }
</script>

<style scoped>

</style>
