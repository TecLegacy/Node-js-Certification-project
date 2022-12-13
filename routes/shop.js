const express = require('express');

const Model = require('../model/userModel');
const Cart = require('../model/cartModel');

const shopRouter = express.Router();

shopRouter.get('/', (req, res) => {
  /**File Read problem (read/Write file is Async)
   * product=userModal.fetchALl() <- this doesnt return undefined
   */

  //Using Model to render data
  Model.fetchAll(productOut => {
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
  Model.fetchAll(productOut => {
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
  Model.fetchSingleProduct(prodId, single => {
    res.render('shop/singleProduct.ejs', {
      path: 'products-details',
      title: single.title,
      image: single.image,
      price: single.price,
      description: single.description,

      productId: prodId,
    });
  });
});

//Cart
shopRouter.get('/add-to-cart', (req, res) => {
  res.render('shop/cart.ejs', {
    path: 'add-to-cart',
  });
});

shopRouter.post('/add-to-cart', (req, res) => {
  const prodId = req.body.productId;

  Model.fetchSingleProduct(prodId, product => {
    console.log('product', product);
    Cart.addCart(prodId, 302);
  });

  res.redirect('/add-to-cart');
});

module.exports = shopRouter;
