const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const products = require('./db/products');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./dist'));

app.get('/products', (req, res) => {
  products.getAll().then((products) => {
    res.json(products);
  });
});

app.get('/getproduct/::id', (req, res) => {
  var _id = req.params.id;
  products.getProduct(_id).then((product) => {
    res.json(product);
  });
});

app.post('/products', (req, res) => {
  products
    .create(req.body)
    .then((product) => {
      res.json(product);
    })
    .catch((error) => {
      res.status(500);
      res.json(error);
    });
});

app.post('/updateinventory', (req, res) => {
  var cartProducts = req.body;
  console.log(`updateinventory products: ${JSON.stringify(cartProducts)}`);
  products
    .updateProducts(cartProducts)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500);
      res.json(error);
    });
});

app.all('*', (_req, res) => {
  try {
    res.sendFile('./dist/index.html');
  } catch (error) {
    res.json({
      success: false,
      error: 'Something went wrong with page loading.',
    });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
