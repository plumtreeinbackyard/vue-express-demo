import shop from "../../api/shop";

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  items: [],
  checkoutStatus: null
});

// getters
const getters = {
  cartProducts: (state, getters, rootState) => state.items.map(({ id, quantity }) => {
    const product = rootState.products.all.find(product => product._id === id);
    console.log(
      `cart product: ${JSON.stringify({
        id,
        title: product.title,
        price: product.price,
        quantity
      })}`
    );
    return {
      id,
      title: product.title,
      price: product.price,
      quantity
    };
  }),
  cartTotalPrice: (state, getters) => getters.cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  )
};

// actions
const actions = {
  checkout({ commit, state }, products) {
    const savedCartItems = [...state.items];
    commit("setCheckoutStatus", null);
    // empty cart
    commit("setCartItems", { items: [] });
    shop.buyProducts(
      products,
      () => {
        commit("setCheckoutStatus", "successful");
        // update product inventory in database
        shop.updateInventoryInDB(products);
      },
      () => {
        commit("setCheckoutStatus", "failed");
        // rollback to the cart saved before sending the request
        commit("setCartItems", { items: savedCartItems });
      }
    );
  },

  addProductToCart({ state, commit }, { id, quantity }) {
    console.log(`id to be passed: ${id}`);
    commit("setCheckoutStatus", null);
    const cartItem = state.items.find(item => item.id === id);
    if (!cartItem) {
      commit("pushProductToCart", { id, quantity });
      console.log("Successfully added product to cart.");
    } else {
      commit("incrementItemQuantity", { id, quantity });
      console.log("Unsuccessfully added product to cart.");
    }
    // remove item quantity from stock
    commit("products/decrementProductInventory", { id, quantity }, { root: true });
  }
};

// mutations
const mutations = {
  pushProductToCart(state, { id, quantity }) {
    state.items.push({ id, quantity });
  },

  incrementItemQuantity(state, { id, quantity }) {
    const cartItem = state.items.find(item => item.id === id);
    cartItem.quantity += quantity;
  },

  setCartItems(state, { items }) {
    state.items = items;
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
