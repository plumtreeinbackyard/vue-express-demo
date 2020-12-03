<template>
  <div class="main">
    <h1>Product list</h1>
    <div class="list-unstyled" v-for="product in products" :key="product._id">
      <li>
        <div class="container">
          <router-link :to="{ name: 'Product', params: { id: product._id } }">
            <div class="row align-items-center">
              <div class="col-4">
                <img src="https://dummyimage.com/300x200/d9d2d9/736b73.jpg" />
              </div>
              <div class="col-8 ">
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

<style>
h1 {
  font-size: 2rem;
  margin-bottom: 2em;
}
form {
  max-width: 800px;
  margin: 2em auto 5em;
}
.list-unstyled {
  margin: 1em auto !important;
}
img {
  max-width: 300px;
  height: auto;
}
</style>
