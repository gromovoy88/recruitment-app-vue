<template>
  <div class="card-wrapper">
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
      <div class="card-actions-wrapper">
        <button class="card-go-to-info" @click="goToProduct(product.id)">
          <span>Info</span>
        </button>
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
export default {
  name: 'CatalogCard',
  props: {
    product: Object,
  },
  computed: {
    isInCart() {
      return this.product.quantity;
    },
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch('addToCart', id);
    },
    goToProduct(id) {
      this.$router.push({ path: `/product/${id}` });
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  position: relative;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  transition: .3s;

  &:hover {
    .card-actions-wrapper {
      display: flex;
    }
  }

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

  &-actions-wrapper {
    flex-direction: column;
    position: absolute;
    top: 0px;
    left: 0px;
    display: none;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.9);
  }
}
</style>
