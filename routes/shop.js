const express = require('express');
const shopRouter = express.Router();

const UserModal = require('../model/userModel');

//@ method GET
shopRouter.get('/', (req, res) => {
  /**File Read problem (read/Write file is Async)
   * product=userModal.fetchALl() <- this doesnt return undefined
   *
   */

  //Using Model to render data
  UserModal.fetchAll(productOut => {
    console.log('product Out', productOut);

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
  console.log('lol');

  UserModal.fetchAll(productOut => {
    // const test=JSON.parse(productOut)
    console.log('productOut', productOut.productId);

    res.render('shop/product-details.ejs', {
      title: 'product-details',
      path: 'products-details',
      // id: productOut.productId,
      productId: productOut.productId,
      info: productOut,
    });
  });
});

module.exports = shopRouter;
