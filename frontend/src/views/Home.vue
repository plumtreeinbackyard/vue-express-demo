<template>
  <div class="main">
    <h1>Product list</h1>
    <div class="list-unstyled" v-for="product in products" :key="product._id">
      <li v-if="product.inventory > 0">
        <div class="container">
          <router-link :to="{ name: 'Product', params: { id: product._id } }">
            <div class="row align-items-center">
              <div class="col-6">
                <img src="/img/300x200.jpg" class="img-fluid" />
              </div>
              <div class="col-6">
                <p>
                  {{ product.title }}
                </p>
                <p>${{ product.price }}</p>
              </div>
            </div></router-link
          >
        </div>
      </li>
      <hr />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  data: () => ({
    error: ""
  }),
  computed: mapState({
    products: state => state.products.all
  }),
  created() {
    this.$store.dispatch("products/getAllProducts");
  }
};
</script>
