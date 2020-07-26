<template>
  <div class="catalog">
    <catalog-card
      class="catalog-card"
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CatalogCard from './CatalogCard.vue';

export default {
  name: 'Catalog',
  components: {
    CatalogCard,
  },
  created() {
    this.$store.dispatch('fetchProducts');
  },
  computed: {
    ...mapState([
      'products',
    ]),
  },
};
</script>

<style lang="scss">
.catalog {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  &-card {
    flex: 0 0 22%;
    margin: auto;
    margin-left: 0px;
    margin-bottom: 30px;

    &:nth-child(4n) {
      margin-right: 0px;
    }
  }
}
</style>
