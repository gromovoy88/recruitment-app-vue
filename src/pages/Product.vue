<template>
  <div class="product">
    <product-card/>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';

export default {
  name: 'Home',
  components: {
    ProductCard,
  },
};
</script>

<style scoped lang="scss">
.product {
  padding: 0px 15px;
}
</style>
