/**
 *  cart [ products: [] ,totalPrice : ' ']  -> product { id, qnty }
 */

const fs = require('fs');
const path = require('path');

const root = require('../utils/parentDirectory');

//Path to cartfile
const p = path.join(root, 'data', 'cart.json');

module.exports = class Cart {
  static addCart(id, articlePrice) {
    //Check for exisiting data in cart from FS
    fs.readFile(p, (err, fileContent) => {
      let cart = {
        products: [],
        totalPrice: null,
      };
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      const cartExistIndex = cart.products.findIndex(curr => curr.id === id);
      const productExist = cart.products[cartExistIndex];
      let updatedProducts;

      //Increase quantity by 1
      if (productExist) {
        updatedProducts = { ...productExist };
        // updatedProducts.qnty += 1;
        updatedProducts.qnty = updatedProducts.qnty + 1;

        cart.products = [...cart.products]; // <- WHY ? is this needed
        cart.products[cartExistIndex] = updatedProducts;
      } else {
        updatedProducts = {
          id,
          qnty: 1,
        };
        cart.products = [...cart.products, updatedProducts];
      }
      // cart.totalPrice += +articlePrice;
      cart.totalPrice = cart.totalPrice + +articlePrice;

      //save cart back to FS
      fs.writeFile(p, JSON.stringify(cart), err => console.error(err));
    });
  }
};
