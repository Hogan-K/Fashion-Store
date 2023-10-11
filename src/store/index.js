import {createStore} from 'vuex'
import axios from "axios";

const store = createStore({
  // namespaced:true,
  strict: true,
  state() {
    return {
      isLoading: false,
      productsAll: [],
      products: [],
      carts:{
        carts:{},
      },
      pagination: {},
      alert: {
        status: false,
        color: '',
        type: 'success',
        title: '',
        text: '',
      },
    }
  },
  mutations: {
    ISLOADING(status, payload) {
      status.isLoading = payload;
    },
    GETPRODUCTSALL(status, payload) {
      status.productsAll = payload;
    },
    GETPRODUCTS(status, payload) {
      status.products = payload;
    },
    GETPAGINATION(status, payload) {
      status.pagination = payload;
    },
    SETALERT(status, payload) {
      status.alert.status = payload.status;
      status.alert.color = payload.color;
      status.alert.type = payload.type;
      status.alert.title = payload.title;
      status.alert.text = payload.text;
    },
    GETCARTS(status, payload){
      status.carts = payload;
    },
  },
  actions: {
    Loading(context, payload) {
      context.commit('ISLOADING', payload);
    },
    getProductsAll(context) {
      context.commit('ISLOADING', true);
      axios.get(`https://vue-course-api.hexschool.io/api/hogankai/products/all`)
        .then((res) => {
          let msg = res.data.products.filter(function (item) {
            return item.is_enabled;
          });
          context.commit('GETPRODUCTSALL', msg);
          context.commit('ISLOADING', false);
        })
    },
    signInStatus(context, payload) {
      context.commit('SIGNINSTATUS', payload);
    },
    getProducts(context, payload) {
      context.commit('ISLOADING', true);
      let page = payload;
      axios.get(`https://vue-course-api.hexschool.io/api/hogankai/admin/products?page=${page}`)
        .then((res) => {
          console.log(res.data.pagination);
          context.commit('GETPAGINATION', res.data.pagination)
          context.commit('GETPRODUCTS', res.data.products)
          context.commit('ISLOADING', false);
        })
    },
    getCarts(context) {
      context.commit('ISLOADING',true);
      axios.get(`https://vue-course-api.hexschool.io/api/hogankai/cart`)
        .then((res) => {
          context.commit('GETCARTS',res.data.data);
          context.commit('ISLOADING',false);
        })
    },
    setAlert(context, payload) {
      context.commit('SETALERT', payload);
      setTimeout(() => {
        context.commit('SETALERT', {status: false})
      }, 2000)
    }
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    productsAll(status) {
      return status.productsAll;
    },
    products(status) {
      return status.products;
    },
    pagination(status) {
      return status.pagination;
    },
    alert(status) {
      return status.alert;
    },
    carts(status){
      return status.carts;
    }
  }
})

export default store
