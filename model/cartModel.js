const fs = require('fs');
const path = require('path');
const root = require('../utils/parentDirectory');

const p = path.join(root, 'data', 'cart.json');

//TESTING LOGIC
module.exports = class Cart {
  /**
   * [{product:[{id:123,qty:2},{id:345,qty:1}]
   * }]
   */
  static countProduct(id) {
    //create cart in a sperate file
    fs.readFile(p, (err, fileContent) => {
      let cart = {
        product: [],
        totalPrice: '',
      };
      //To avoid error -> create a file
      if (!err) {
        cart = JSON.parse(fileContent); //fetch old content from file
      }
      //check if product already exists
      const productExists = cart.product.findIndex(p => p.productId === id);
      if (productExists) {
        //update the product
        const updatedCart = {
          id,
          qty: 1,
        };
        cart.product[productExists] = updatedCart;
        //updated price
        cart.totalPrice = totalPrice * updatedCart.qty;
      } else {
        newProduct = {
          id,
          qty: 1,
        };
        cart.product.push(newProduct);
      }
    });

    fs.writeFile(p, JSON.stringify(cart), err => {
      console.error(err);
    });
  }

  // Check if product already exists
};
