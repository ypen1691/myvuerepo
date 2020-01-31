<template>
  <div class="container">
  <my-header :cartItemCount="cartItemCount"></my-header>
  <div class="row" >
    <div class="col-md-12">
      <h1>Checkout</h1>
    </div>
    <div class="col-md-6">
      <strong>First name:</strong>
      <input type="text" v-model.trim="order.firstName" class="form-control"/>
    </div>
    <div class="col-md-6">
      <strong>Last name:</strong>
      <input type="text" v-model.trim="order.lastName" class="form-control"/>
    </div>
    <div class="form-group">
      <div class="col-md-12"><strong>Email address:</strong></div>
      <div class="col-md-12">
        <input type="text" v-model.trim="order.address" class="form-control"/>
      </div>
    </div>
    <div class="form-group">
      <div class="col-md-12"><strong>City:</strong></div>
      <div class="col-md-12">
        <input type="text" v-model.trim="order.city" class="form-control"/>
      </div>
    </div>
    <div class="form-group">
      <div class="col-md-12"><strong>State:</strong></div>
      <div class="col-md-12">
        <select  class="form-control" v-model="order.state">
          <option value="" disabled>Choice State...</option>
          <option v-for="(state,key) in states" v-bind:value="state">
            {{key}}
          </option>

        </select>
      </div>
    </div>

    <div class="form-group">
      <div class="col-sm-12"><strong>Postal code:</strong></div>
      <div class="col-md-12">
        <input type="number" v-model.number="order.zip" class="form-control"/>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-6 boxes">
        <input type="checkbox" id="gift" value="true"
               v-bind:true-value="order.sendGift"
               v-bind:false-value="order.dontSendGift"
               v-model="order.gift"
               class="form-control"/>
        <label for="gift">Ship As Gift?</label>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-6 boxes">
        <input type="radio" id="home"
               value="Home"
               v-bind:value="order.home"
               v-model="order.method"
               class="form-control"
        />
        <label for="home">Home</label>
        <input type="radio" id="business"
               value="Business"
               v-bind:value="order.business"
               v-model="order.method"
               class="form-control"
        />
        <label for="business">Business</label>
      </div>
    </div>
    <div class="col-md-12">
						<pre>
							First name: {{order.firstName}}
							Last name: {{order.lastName}}
							Address: {{order.address}}
							City: {{order.city}}
							State: {order.state}}
							Zip: {{order.zip}}
							Method: {{order.method}}
							Gift: {{order.gift}}
						</pre>
    </div>
    <div class="form-group">
      <div class="col-md-6">
        <button type="submit" class="btn btn-primary submit"
                v-on:click="submitForm">
          Place Order
        </button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  /* eslint-disable */
    import MyHeader from "./Header";
    export default {
      name: "Form",
      props:['cartItemCount'],
      components: {MyHeader},
      data(){
          return{
            states:{
              Al: 'Alabama Al',
              AA: 'Alabama AA',
              AQ: 'Alabama AQ',
              AW: 'Alabama AW',
              AS: 'Alabama AS'
            },
            order:{
              firstName: '',
              lastName: '',
              state:'',
              zip:'',
              city:'',
              address:'',
              method: 'Home Address',
              home: 'Home Address',
              business: 'Business Address',
              gift: 'Send a gift',
              sendGift: 'Send as a gift',
              dontSendGift: 'Dont Send as a gift'

            },
          }
      },
      methods:{
          submitForm(){
            alert('submitted')
          }
      }
    }
</script>
