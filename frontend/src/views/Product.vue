<template>
  <div class="main">
    <h1>Product detail</h1>
    <form @submit.prevent="addToCart()">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-5">
            <img src="https://dummyimage.com/300x200/d9d2d9/736b73.jpg" />
          </div>
          <div class="col-3 text-left">
            <p>
              {{ product.title }}
            </p>
            <p>${{ product.price }}</p>
            <p>Inventory: {{ product.inventory }}</p>
          </div>
          <div class="col-2">
            <div class="form-group">
              <label for="quantity">Quantity</label>
              <input
                v-model="quantity"
                type="number"
                min="0"
                class="form-control"
                id="quantity"
                required
              />
            </div>
          </div>
          <div class="col-2">
            <button :disabled="!isInventoryGood" type="submit" class="btn btn-primary">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </form>
    <p v-if="!isInventoryGood">
      This product's inventory is lower than the quantity you required.
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Product",
  data: () => ({
    error: "",
    id: "",
    quantity: 0,
    product: {}
  }),
  computed: {
    isInventoryGood() {
      return parseInt(this.product.inventory, 10) >= this.quantity;
    }
  },
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    addToCart() {
      this.addProductToCart({ id: this.id, quantity: this.quantity });
      this.quantity = 0;
    }
  },
  created() {
    this.id = this.$route.params.id;
    console.log(`id: ${this.id}`);
    this.product = this.$store.getters["products/getOneProduct"](this.id);
    console.log(`this product: ${JSON.stringify(this.product)}`);
  }
};
</script>
