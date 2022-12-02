const fs = require('fs');
const path = require('path');
const root = require('../utils/parentDirectory');

const p = path.join(root, 'data', 'cart.json');

module.exports = class CartModel {
  /**
   * [{product:[{id:123,qty:2},{id:345,qty:1}]
   * }]
   */

  //Fetch previous cart
  static addCart(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      //cart structure
      let cart = {
        product: [],
        totalPrice: '',
      };

      if (!err) {
        cart = JSON.parse(fileContent);
      }

      //Check if item exists
      const articleExists = cart.product.findIndex(p => p.productId === id);
      let updatedCart;
      if (articleExists) {
        updatedCart = { ...articleExists };
        updatedCart.qty += 1;
      } else {
        updatedCart = { id, qty: 1 };
      }

      //total price
      cart.totalPrice += productPrice;
    });
  }
};
