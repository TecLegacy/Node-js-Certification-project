/** Cart Stucture
 * cart [{product:[{id:1,quantity:2}],totalPrice:'tp+quantity*idprice'}]
 */

const path = require('path');
const fs = requir('fs');

const root = require('../utils/parentDirectory');

const p = path.join(root, 'data', 'cart.json');

module.exports = class Cart {
  static getCart(id) {
    let cart = {
      product: [],
      totalPrice: '',
    };
    //Read -> Append/Replace -> Write in cart
    fs.readFile(p, (err, fileContent) => {
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      //Cart Exists
      const cartExists = cart.product.findIndex(curr => id === curr.id);
    });
  }
};
