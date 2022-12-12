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
        totalPrice: '',
      };
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      const cartExistIndex = cart.product.findIndex(curr => curr.id === id);
      const cartExist = cart.product[cartExistIndex];
      let updatedCart;

      //Increase quantity by 1
      if (cartExist) {
        updatedCart = { ...cartExist };
        updatedCart.qnty += 1;

        cart.products = [...cart.products]; // <- WHY ? is this needed
        cart.products[cartExistIndex] = updatedCart;
      } else {
        updatedCart = {
          id,
          qnty: 1,
        };
        cart.products = [...cart.products, updatedCart];
      }
      cart.totalPrice += articlePrice;

      //save cart back to FS
      fs.writeFile(p, JSON);
    });
  }
};
