//Reading and Writing UserData to file System
const fs = require('fs');
const path = require('path');
const root = require('../utils/parentDirectory');

// const saveData = [];
// path to Read and Write file
const filePath = path.join(root, 'data', 'user.json');

// const getContentFromFile = () => {
//   const product = [];
//   //ReadFile
//   fs.readFile(filePath, (err, fileContent) => {
//     if (!err) {
//       product = JSON.parse(product);
//     }
//     product.push(this);
//   });
// };

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class UserModel {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  //save User data
  // save() {
  //   //1) read file as json
  //   fs.readFile(filePath, (err, fileContent) => {
  //     let product = [];
  //     //if no err it will be NULL
  //     if (!err) {
  //       //no error  we want to read data from file
  //       //Read data from file if it exists
  //       product = JSON.parse(fileContent);
  //     }
  //     //use arrow function so that it point to class
  //     product.push(this);

  //     //Write onto file after reading and appending
  //     fs.writeFile(filePath, JSON.stringify(product), err => {
  //       console.log('From userModel Error', err);
  //     });
  //   });

  //   // saveData.push(this);
  //   // return;
  // }

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
};
