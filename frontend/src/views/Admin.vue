<template>
  <div class="main">
    <h1>Add products to database</h1>
    <form @submit.prevent="addProduct">
      <div v-if="error" class="alert alert-dismissible alert-warning">
        <button type="button" class="close" data-dismiss="alert">
          &times;
        </button>
        <h4 class="alert-heading">Error!</h4>
        <p class="mb-0">{{ error }}</p>
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-4">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                v-model="product.title"
                type="text"
                class="form-control"
                id="title"
                placeholder="Enter a product name"
                required
              />
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="price">Price</label>
              <input
                v-model="product.price"
                type="number"
                min="0"
                step="0.01"
                class="form-control"
                id="price"
                placeholder="Enter product price"
                required
              />
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="inventory">Inventory</label>
              <input
                v-model="product.inventory"
                type="number"
                class="form-control"
                id="inventory"
                placeholder="Enter product inventory"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <button type="submit" class="btn btn-dark mt-3">Add product</button>
          </div>
        </div>
      </div>
    </form>
    <hr />
    <div class="product-table">
      <h1>Product list</h1>
      <table class="datatable display table table-striped">
        <thead>
          <tr>
            <th scope="col">Product name</th>
            <th scope="col">Price</th>
            <th scope="col">Inventory</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="product in products" :key="product._id" style="cursor: pointer">
            <td>{{ product.title }}</td>
            <td>${{ product.price }}</td>
            <td>{{ product.inventory }}</td>
            <td>
              <router-link :to="{ name: 'Edit', params: { id: product._id } }">
                <img
                  src="/img/outline_edit_black_18dp.png"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Edit product"
                />
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const API_URL = `${window.location.protocol}//${window.location.host}/products`;

export default {
  name: "Admin",
  data: () => ({
    error: "",
    products: [],
    product: {
      title: "",
      price: 0,
      inventory: 0
    }
  }),
  mounted() {
    axios
      .get(API_URL)
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    addProduct() {
      axios
        .post(API_URL, this.product)
        .then(response => {
          this.products.push(response.data);
          this.error = "";
          this.product = {
            title: "",
            price: "",
            inventory: ""
          };
          alert("One product has been added to database.");
        })
        .catch(error => {
          console.log(error);
          this.error = "Something went wrong with saving form data!";
        });
    }
  }
};
</script>
