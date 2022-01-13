import axios from "axios";

const GET_PRODUCTS_API_URL = `${window.location.protocol}//${window.location.host}/products`;

// initial state
const state = () => ({
  all: []
});

// getters
const getters = {
  getOneProduct: state => id => state.all.find(product => product._id === id)
};

// actions
const actions = {
  getAllProducts({ commit }) {
    axios
      .get(GET_PRODUCTS_API_URL)
      .then(response => {
        commit("setProducts", response.data);
      })
      .catch(error => {
        // eslint-disable-next-line
        console.log(error);
      });
  }
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products;
  }
  // ,

  // decrementProductInventory(state, { id, quantity }) {
  //   const product = state.all.find(product => product._id === id);
  //   product.inventory = parseInt(product.inventory, 10) - parseInt(quantity, 10);
  // }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
