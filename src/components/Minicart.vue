<template>
  <div class="minicart-wrapper">
    <div class="minicart">
      <div class="minicart-header">
        <h4>
          <span class="cart-icon"> Cart ( {{cartSize}} )</span>
        </h4>
      </div>
      <div v-if="!cartSize" class="minicart-alert" role="alert">
          Cart is empty! Please add some products.
      </div>
      <div v-else class="minicart-products-area">
        <ul class="minicart-product-list">
          <li
            class="minicart-product-item"
            v-for="product in cart"
            :key="product.id"
          >
            <div class="item-info">
              <div class="qty">
                <span>{{product.quantity}}</span>
              </div>
              <div class="title">
                <span>{{product.title}}</span>
              </div>
            </div>
            <div class="item-actions">
              <button
                @click="removeFromCart(product.id)"
                :disabled="product.quantity === 1">
                -
              </button>
              <div class="counter">
                <span>{{product.quantity}}</span>
              </div>
              <button
                  @click="addToCart(product.id)"
                  :disabled="product.quantity === product.stock">
                  +
              </button>
              <button
                  @click="deleteFromCart(product.id)">
                  Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState([
      'cart',
    ]),
    ...mapGetters([
      'cartSize',
      'cartTotalAmount',
    ]),
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch('addToCart', id);
    },
    removeFromCart(id) {
      this.$store.dispatch('removeFromCart', id);
    },
    deleteFromCart(id) {
      this.$store.dispatch('deleteFromCart', id);
    },
  },
};
</script>

<style scoped lang="scss">
.minicart {
  color: white;

  &-header {
    text-align: left;
  }

  &-products-area {
    padding: 15px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='9' ry='9' stroke='white' stroke-width='6' stroke-dasharray='6%2c 30' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 9px;
  }

  &-product-list {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
  }

  &-product-item {
    display: flex;
    padding: 10px 0px;
    background-color: rgba(0, 0, 0, 0.178);
    align-items: center;
    height: 40px;
    margin-bottom: 10px;
    transition: 0.3s;

    &:hover {
      justify-content: center;
      align-items: center;
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.3);

      .item-info {
        display: none;
      }

      .item-actions {
        display: flex;
      }
    }

    .item-actions {
      display: none;

      .counter {
        display: flex;
        align-items: center;
        margin-right: 5px;
      }

      button {
        margin-right: 5px;

        &:last-child {
          margin-right: 0px;
        }
      }
    }

    .item-info {
      display: flex;

      .qty {
        color: #28B888;
        padding: 0px 20px;
      }
    }
  }
}
</style>
