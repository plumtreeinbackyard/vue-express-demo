<template>
  <div class="main">
    <h1>Product detail</h1>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6">
          <img src="@/assets/img/300x200.jpg" class="img-fluid" />
        </div>
        <div class="col-6 text-left">
          <p>{{ product.title }}</p>
          <p>${{ product.price }}</p>
          <p>Inventory: {{ product.inventory }}</p>
        </div>
      </div>
    </div>

    <form @submit.prevent="addToCart()">
      <div class="container mt-5">
        <div class="row align-items-center justify-content-center">
          <div class="col-3">
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
          <div class="col-4 text-left">
            <button :disabled="!isInventoryGood" type="submit" class="btn btn-dark">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </form>
    <p v-if="!isInventoryGood" sytle="color:red;">
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
      if (this.quantity) {
        this.addProductToCart({ id: this.id, quantity: this.quantity })
          .then(() => setTimeout(() => alert("Added to cart."), 500));
        this.quantity = 0;
      } else {
        alert("Quantity should be greater than 0.");
      }
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.product = this.$store.getters["products/getOneProduct"](this.id);
  }
};
</script>
