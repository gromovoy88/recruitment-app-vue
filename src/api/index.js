import products from './fakeData';

export default {
  getProducts: () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  }),
  cart: (action, productId) => new Promise((resolve) => {
    setTimeout(() => {
      resolve(productId);
    }, 1000);
  }),
};
