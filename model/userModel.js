//Reading and Writing UserData to file System
const fs = require('fs');
const path = require('path');
const root = require('../utils/parentDirectory');

// const saveData = [];
// path to Read and Write file
const filePath = path.join(root, 'data', 'user.json');

const getProductsFromFile = cb => {
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      console.error(err);
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class UserModel {
  constructor(title, image, description, price) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.price = price;
  }

  save() {
    // Creating a product id
    this.productId = Math.random().toString();
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), err => {
        console.error(err);
      });
    });
  }

  static fetchAll(cb) {
    // return saveData;
    fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        // return empty data if no data found
        return cb([]);
      }
      return cb(JSON.parse(fileContent));
    });
  }

  // Fetch single Product
  static fetchSingleProduct(id, cb) {
    fs.readFile(filePath, (err, fileContent) => {
      const products = JSON.parse(fileContent);

      const singleProduct = products.find(p => p.productId === id);
      cb(singleProduct);
    });
  }
};
