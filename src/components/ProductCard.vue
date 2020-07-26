<template>
  <div class="product-card">
    <div class="product-info" v-if="products">
      <div class="card">
        <div class="card-image">
          <img :src="product.image" :alt="product.alt">
        </div>
        <div class="card-info">
          <div class="card-title">
            <h3>{{ product.title }}</h3>
          </div>
          <div class="card-description">
            <p>{{ product.description }}</p>
          </div>
        </div>
        <div class="card-actions">
          <button class="card-add-to-cart" @click="addToCart(product.id)">
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProductCard',
  created() {
    this.$store.dispatch('fetchProducts');
  },
  computed: {
    ...mapState([
      'products',
    ]),
    product() {
      const id = parseInt(this.$route.params.id, 10);
      return this.products.find((product) => product.id === id);
    },
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch('addToCart', id);
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  position: relative;
  background-color: #155BCC;
  color: white;
  display: flex;
  flex-wrap: wrap;
  transition: .3s;

  &-image {
    flex: 0 0 100%;
  }

  &-info {
    flex: 0 0 100%;
  }

  &-actions {
    padding: 10px;

    &-wrapper {
      flex: 0 0 100%;
    }

    button {
      margin: 10px 0px;
      width: 100%;
    }
  }

  &-title {
    text-align: left;
    padding: 0px 10px;
    margin-bottom: 10px;
  }

  &-description {
    text-align: left;
    padding: 0px 10px;
  }

  &-image {
    img {
      width: 100%;
    }
  }
}
</style>
