<template>
  <div class="container">
      <my-header :cartItemCount="cartItemCount"></my-header>
      <main>
        <div class="col-sm-12" v-for="product in sorterProducts">
          <div class="row products">
            <div class="col-xs-12 col-sm-3">
              <figure>
                <img style="max-width: 100%;" v-bind:src="product.image" alt="">
              </figure>
            </div>
            <div class="col-xs-12 col-sm-9">
              <div class="row">
                <div class="col-sm-12">
                  <router-link
                    tag="h1"
                    :to=" {name: 'Id', params: {id: product.id} }"
                  >{{product.title}}</router-link>
                  <p v-html="product.description"></p>
                  <p class="price">{{product.price | formatPrice}}</p>
                </div>
                <div class="col-sm-3">
                  <button
                    class="btn action tocart"
                    v-on:click="addToCart(product)"
                    v-if="canAddToCart(product)"
                  >
                    To cart
                  </button>
                  <button
                    class="btn  disabled"
                    disabled="true"
                    v-else
                  >
                    To cart
                  </button>
                </div>
                <div class="col-sm-3">
                  <transition name="bounce" mode="out-in">
                    	<span class="inventory-msg"
                            v-if="product.availableInventory - cartCount(product.id) === 0"
                            key="0"
                      >All out!	</span>
                    <span class="inventory-msg"
                          v-else-if="product.availableInventory - cartCount(product.id) < 5"
                          key=""
                    >only {{product.availableInventory - cartCount(product.id)}} left!</span>
                    <span class="inventory-msg"
                          v-else
                          key="">buy now!</span>
                  </transition>

                </div>
                <div class="col-sm-3">
                  <div class="rating">
                    <span v-for="n in 5" v-bind:class="{'active' : checkRating(n,product)}" class="glyphicon glyphicon-star-empty"></span>
                  </div>
                </div>
              </div>




            </div>
          </div>
          <hr/>
        </div>
      </main>
  </div>

</template>
<script>
  /* eslint-disable */
  import MyHeader from './Header.vue';
  import {mapGetters} from 'vuex';
  export default {
    name: "imain",
    // props:['cartItemCount'],
    data(){
      return{
        cart:[]
      };
    },
    components: {MyHeader},
    methods:{
      canAddToCart: function(aProduct){
        return aProduct.availableInventory >  this.cartCount(aProduct.id)
      },
      cartCount: function (id) {
        var count = 0;
        for( var i=0; i < this.cart.length; i++){
          if(this.cart[i] === id){
            count++
          }
        }
        return count;

      },
      checkRating: function (n, myProduct) {
        return myProduct.rating - n >= 0;
      },
      addToCart: function(aProduct){
        this.cart.push(aProduct.id)
      },
      showCheckout: function () {
        this.showProduct = this.showProduct ? false : true;
      },
      submitForm: function(){
        alert("submitted");
      }
    },
    computed: {
      ...mapGetters([
        'products'
      ]),
      cartItemCount: function (){
        return this.cart.length || ''
      },
      sorterProducts: function () {
        if(this.products.length > 0){
          let productsArray = this.products.slice(0);
          function compare(a,b) {
            if(a.title.toLowerCase() < b.title.toLowerCase()){
              return -1;
            }
            if(a.title.toLowerCase() > b.title.toLowerCase()){
              return 1;
            }
            return 0;
          }
          return productsArray.sort(compare);
        }
      }
    },
    filters:{
      formatPrice: function (price) {
        if(!parseInt(price)){ return ""; }
        if(price >99999){
          var priceString = (price / 100).toFixed(2);
          var priceArray = priceString.split("").reverse();
          var index = 3;
          while (priceArray.length > index + 3){
            priceArray.splice(index+3,0,",");
            index += 4;
          }
          return "$" + priceArray.reverse().join("");
        }else{
          return "$" + (price / 100).toFixed(2);
        }
      }
    },
    created: function () {
      this.$store.dispatch('initStore');
    }
  }
</script>
<style scoped>
  .bounce-enter-active {
     animation: shake 50s cubic-bezier(.37,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility : hidden;
  }
  @keyframes shake {
    10%, 90% {
      color: red;
      transform: translate3d(-1px, 0, 0);
    }
    20%, 80% {
      transform : translate3d(2px, 0, 0);
    }
    30%, 50%, 70% {
      color: red;
      transform: translate3d(-4px, 0, 0);
    }
    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
</style>

