import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Main from '@/components/Main'
import Product from '@/components/Product'
import EditProduct from "../components/EditProduct";
import PageNotFound from "../components/PageNotFound";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/page-not-found'
    },
    {
      path: '/',
      name: 'iMain',
      component: Main,
      props: true
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
      props: true
    },
    {
      path: '/page-not-found',
      name: 'PageNotFound',
      component: PageNotFound,
      props: true
    },
    {
      path: '/product/:id',
      name: 'Id',
      component: Product,
      props: true,
      children:[
        {
          path: 'edit',
          name: 'Edit',
          component: EditProduct,
          props: true
        }
      ]
    },

  ]
})
