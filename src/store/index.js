import Vue from 'vue';
import Vuex from 'vuex';
import productApi from '../api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: null,
    cart: [],
    toast: {
      text: '',
      show: false,
    },
  },
  getters: {
    cartSize: (state) => state.cart.length,
    cartTotalAmount:
      (state) => state.cart.reduce(
        (total, product) => total + (product.price * product.quantity), 0,
      ),
    toast: (state) => state.toast,
  },
  mutations: {
    setUpProducts: (state, productsPayload) => {
      state.products = productsPayload;
    },
    addToCart: (state, productId) => {
      const resultProduct = state.products.find((product) => product.id === productId);
      const cartProduct = state.cart.find((product) => product.id === productId);

      if (cartProduct) {
        cartProduct.quantity += 1;
      } else {
        state.cart.push({
          ...resultProduct,
          stock: resultProduct.quantity,
          quantity: 1,
        });
      }

      resultProduct.quantity -= 1;
    },
    removeFromCart: (state, productId) => {
      const resultProduct = state.products.find((product) => product.id === productId);
      const cartProduct = state.cart.find((product) => product.id === productId);

      cartProduct.quantity -= 1;
      resultProduct.quantity += 1;
    },
    deleteFromCart: (state, productId) => {
      const resultProduct = state.products.find((product) => product.id === productId);
      const cartProductIndex = state.cart.findIndex((product) => product.id === productId);

      resultProduct.quantity = state.cart[cartProductIndex].stock;
      state.cart.splice(cartProductIndex, 1);
    },
    showToast: (state, toastText) => {
      state.toast.show = true;
      state.toast.text = toastText;
    },
    hideToast: (state) => {
      state.toast.show = false;
      state.toast.text = '';
    },
  },
  actions: {
    fetchProducts: ({ commit }) => {
      productApi.getProducts().then((products) => {
        commit('setUpProducts', products);
        commit('showToast', 'products loaded');
      });
    },
    addToCart: ({ commit }, productId) => {
      commit('hideToast', 'products start loading');
      productApi.cart('add', productId).then(() => {
        commit('addToCart', productId);
        commit('showToast', 'added to cart');
      });
    },
    removeFromCart: ({ commit }, productId) => {
      commit('hideToast', 'products start removing');
      productApi.cart('remove', productId).then(() => {
        commit('removeFromCart', productId);
        commit('showToast', 'removed from cart');
      });
    },
    deleteFromCart: ({ commit }, productId) => {
      commit('hideToast', 'products start removing fromt cart');
      productApi.cart('delete', productId).then(() => {
        commit('deleteFromCart', productId);
        commit('showToast', 'deleted from cart');
      });
    },
  },
});

export default store;
