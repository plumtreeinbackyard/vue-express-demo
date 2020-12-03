const Joi = require('joi');
const db = require('./connection');

const schema = Joi.object().keys({
  title: Joi.string().required(),
  price: Joi.string().required(),
  inventory: Joi.string().required(),
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
  // console.log(`products: ${JSON.stringify(cartProducts)}`);
  for (var i = 0; i < cartProducts.length; i++) {
    // console.log(`product: ${JSON.stringify(cartProducts[i])}`);
    var item = await getProduct(cartProducts[i].id);
    console.log(`item: ${JSON.stringify(item)}`);

    console.log(`item.inventory: ${parseInt(item.inventory)}`);
    console.log(`item.quantity: ${parseInt(cartProducts[i].quantity)}`);
    var newInventory =
      parseInt(item.inventory) - parseInt(cartProducts[i].quantity); 
    console.log(`newInventory: ${newInventory}`);
    try{
        products.findOneAndUpdate(
          { _id: item._id },
          { $set: { inventory: newInventory }}
        );
    } catch(error){
      return Promise.reject(error);
    }
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

module.exports = {
  create,
  getProduct,
  getAll,
  updateProducts,
};
