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
    res.render('shop', { info: productOut, title: 'Shop', path: 'Shop' });
  });
});

module.exports = shopRouter;
