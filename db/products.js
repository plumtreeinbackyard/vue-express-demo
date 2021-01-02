const Joi = require('joi');
const db = require('./connection');

const schema = Joi.object().keys({
  title: Joi.string().required(),
  price: Joi.number().required(),
  inventory: Joi.number().required(),
});

const products = db.get('products');

function getAll() {
  return products.find();
}

function getProduct(id) {
  return products.findOne({ _id: id });
}

// products contains two properties: id and quantity.
async function updateProducts(cartProducts) {
  try {
    for (var i = 0; i < cartProducts.length; i++) {
      var item = await getProduct(cartProducts[i].id);
      var newInventory =
        parseInt(item.inventory) - parseInt(cartProducts[i].quantity);
      products.findOneAndUpdate(
        { _id: item._id },
        { $set: { inventory: newInventory } }
      );     
    }
    return Promise.resolve('Products updated.');
  } catch (error) {
    return Promise.reject(error);
  }
}

async function updateOneProduct(product) {
  try {
    products.findOneAndUpdate(
      { _id: product._id },
      { $set: { price: product.price, inventory: product.inventory } }
    );
    return Promise.resolve('Product updated.');
  } catch (error) {
    return Promise.reject(error);
  }
}

async function create(product) {
  const result = schema.validate(product);
  if (result.error == null) {
    product.created = new Date();
    return await products.insert(product);
  } else {
    return Promise.reject(result.error);
  }
}

function deleteProduct(id) {
  try {
    products.remove(
      { _id: id }
    );
    return Promise.resolve('Product deleted.');
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = {
  create,
  getProduct,
  getAll,
  updateProducts,
  updateOneProduct,
  deleteProduct
};
