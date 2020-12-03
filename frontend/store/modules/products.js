import shop from "../../api/shop";

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
    shop.getProducts(products => {
      commit("setProducts", products);
    });
  }
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products;
  },

  decrementProductInventory(state, { id, quantity }) {
    console.log(`all products: ${JSON.stringify(state.all)}`);
    console.log(`id: ${id}`);
    const product = state.all.find(product => product._id === id);
    product.inventory -= quantity;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
