const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const products = require('./db/products');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

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

app.get('/editproduct/::id', (req, res) => {
  var _id = req.params.id;
  products.editProduct(_id).then((product) => {
    res.json(product);
  });
});

app.post('/addproduct', (req, res) => {
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

app.post('/deleteproduct', (req, res) => {
  products
    .deleteProduct(req.body.id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500);
      res.json(error);
    });
});

app.post('/updateinventory', (req, res) => {
  var cartProducts = req.body;  
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

app.post('/editproduct', (req, res) => {
  var product = req.body;  
  products
    .updateOneProduct(product)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500);
      res.json(error);
    });
});

app.all('/', (_req, res) => {
  try {
    res.sendFile(path.join(__dirname, 'dist/index.html'));  
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
