<template>
  <div class="main">
    <h1>Your Cart</h1>
    <p v-show="!products.length">
      Your cart is empty, add some products to cart.
    </p>
    <form @submit.prevent="checkout()">
      <div v-show="products.length && !checkoutStatus">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-4"></div>
            <div class="col-3">Product</div>
            <div class="col-2">
              Quantity
            </div>
            <div class="col-3">
              Total
            </div>
          </div>
        </div>
        <hr />
        <li v-for="(product, index) in products" :key="index">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-4">
                <img src="@/assets/img/300x200.jpg" class="img-fluid" />
              </div>
              <div class="col-3">
                <p>{{ product.title }}</p>
                <p>${{ product.price }}</p>
                <p>Inventory: {{ product.inventory }}</p>
              </div>
              <div class="col-2">
                <div class="form-group">
                  <input
                    v-model="quantities[index]"
                    type="number"
                    min="1"
                    class="form-control"
                    @input="changeQuantity(index, product.inventory, product.id, quantities[index])"
                  />
                </div>
                <p v-if="parseInt(product.inventory, 10) < quantities[index]" style="color:red;">
                  Low inventory
                </p>
              </div>
              <div class="col-3">
                ${{ Math.round(product.price * quantities[index] * 100) / 100 }}
                <p>
                  <a
                    href="javascript:void(0)"
                    @click="removeItem(product.id)"
                    style="color: blue; cursor: pointer;"
                    >Remove</a
                  >
                </p>
              </div>
            </div>
          </div>
        </li>
        <hr />
        <div class="container">
          <div class="row justify-content-end">
            <div class="col-2">Total:</div>
            <div class="col-3">${{ total }}</div>
          </div>
        </div>
      </div>

      <p class="mt-5 mb-5">
        <button :disabled="!products.length || flag" type="submit" class="btn btn-dark">
          Checkout
        </button>
      </p>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Cart",
  data: () => ({
    quantities: [],
    inventoryFlag: [],
    flag: false
  }),
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
    changeQuantity(index, inventory, id, quantity) {
      this.$store.dispatch("cart/changeQuantity", { id, quantity });
      // if item inventory is lower than required item quantity then flag 1 for item inventory state
      this.inventoryFlag[index] = parseInt(inventory, 10) < quantity ? 1 : 0;
      this.flag = this.inventoryFlag.reduce((total, flag) => total + flag, 0) > 0;
    },
    checkout() {
      this.$store
        .dispatch("cart/checkout", this.products)
        .then(() => setTimeout(() => alert("Checkout successful."), 500));
    },
    removeItem(id) {
      this.$store.dispatch("cart/removeItem", { id });
      // reload page to refresh products quantity
      window.location.reload();
    }
  },
  created() {
    this.products.forEach((product, index) => {
      this.quantities.push(product.quantity);
      this.inventoryFlag[index] = parseInt(product.inventory, 10) < this.quantities[index] ? 1 : 0;
    });
  }
};
</script>
