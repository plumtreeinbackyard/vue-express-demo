<template>
  <div class="main">
    <h1>Manage products</h1>
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
          <div class="col-3">
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
          <div class="col-3">
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
          <div class="col-3">
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
          <div class="col-3">
            <button type="submit" class="btn btn-primary">Add product</button>
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
          </tr>
        </thead>

        <tbody>
          <tr v-for="(product, index) in products" :key="index" style="cursor: pointer">
            <td>{{ product.title }}</td>
            <td>${{ product.price }}</td>
            <td>{{ product.inventory }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<!--  jQuery  -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<!-- dataTables JS -->
<script
  type="text/javascript"
  charset="utf8"
  src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"
></script>
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
      .then(() => {
        $(".datatable").DataTable();
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

<style>
form,
.product-table {
  max-width: 800px;
  margin: 2em auto;
}

img {
  max-width: 300px;
  height: auto;
}
</style>
