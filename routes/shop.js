const express = require('express');
const fs = require('fs');
const path = require('path');

// const Cart = require('../model/cartModel');
const Model = require('../model/userModel');

const filePath = path.dirname(require.main.filename);

const shopRouter = express.Router();

const UserModal = require('../model/userModel');

//@ method GET
shopRouter.get('/', (req, res) => {
  /**File Read problem (read/Write file is Async)
   * product=userModal.fetchALl() <- this doesnt return undefined
   */

  //Using Model to render data
  UserModal.fetchAll(productOut => {
    // console.log('product Out', productOut);

    //EJS
    res.render('shop/shop.ejs', {
      info: productOut,
      title: 'Shop',
      path: 'Shop',
    });
  });
});

//Product-details Page
shopRouter.get('/product-details', (req, res, next) => {
  UserModal.fetchAll(productOut => {
    res.render('shop/product-details.ejs', {
      title: 'product-details',
      path: 'products-details',
      info: productOut,
    });
  });
});
// Look into a specific product
shopRouter.get('/product-details/:prodId', (req, res) => {
  //Filter data and send to file
  const prodId = req.params.prodId;

  //Access file and fetch that product
  // fs.readFile(path.join(filePath, 'data', 'user.json'), (err, fileContent) => {
  //   //Find that specific file

  // });

  Model.fetchSingleProduct(prodId, single => {
    // console.log('single', single);

    res.render('shop/singleProduct.ejs', {
      path: 'products-details',
      title: single.title,
    });
  });

  //show that one item only with dynamic data
  // res.render('singleProduct.ejs', {});
});

//Cart
shopRouter.get('/cart', (req, res) => {
  //
  console.log('keshav');

  // Cart.countProduct('10');
  // res.render('shop/cart.ejs', { title: 'Cart', path: 'cart' });
});

// //Cart POST = add item to cart
// shopRouter.post('/cart', (req, res) => {
//   //Handle productId from post Request via input from shop.ejs
//   const productId = req.body.productId;

//   console.log(productId);
// });

module.exports = shopRouter;
