const express = require('express');
const shopRouter = express.Router();

const UserModal = require('../model/userModel');

//@ method GET
shopRouter.get('/', (req, res) => {
  //Using Model to render data
  UserModal.fetchAll(() => {
    console.log('product Out', productOut);

    //EJS
    res.render('shop', { info: productOut, title: 'Shop', path: 'Shop' });
  });
});

module.exports = shopRouter;
