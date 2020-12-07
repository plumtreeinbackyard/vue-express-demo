<template>
  <div class="main">
    <h1>Your Cart</h1>
    <p v-show="!products.length">
      Your cart is empty, add some products to cart.
    </p>

    <div v-show="!checkoutStatus">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-4"></div>
          <div class="col-3">Product</div>
          <div class="col-2">
            Quantity
          </div>
          <div class="col-3">
            Total price
          </div>
        </div>
      </div>
      <hr />
      <li v-for="(product, index) in products" :key="index">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-4">
              <img src="/img/300x200.jpg" class="img-fluid" />
            </div>
            <div class="col-3">
              <p>{{ product.title }}</p>
              <p>${{ product.price }}</p>
            </div>
            <div class="col-2">
              {{ product.quantity }}
            </div>
            <div class="col-3">${{ product.price * product.quantity }}</div>
          </div>
        </div>
      </li>
      <hr />
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-2">Total price:</div>
          <div class="col-3">${{ total }}</div>
        </div>
      </div>
    </div>

    <p class="mt-5 mb-5">
      <button :disabled="!products.length" @click="checkout(products)" class="btn btn-primary">
        Checkout
      </button>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotalPrice"
    })
  },
  methods: {
    checkout(products) {
      this.$store
        .dispatch("cart/checkout", products)
        .then(() => setTimeout(() => alert("Checkout successful."), 500));
    }
  }
};
</script>
