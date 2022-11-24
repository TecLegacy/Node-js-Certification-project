//Reading and Writing UserData to file System
const fs = require('fs');
const path = require('path');
const root = require('../utils/parentDirectory');

// const saveData = [];
// path to Read and Write file
const filePath = path.join(root, 'data', 'user.json');

module.exports = class UserModel {
  constructor(title) {
    this.title = title;
  }

  //save User data
  save() {
    //1) read file as json
    fs.readFile(filePath, (err, fileContent) => {
      console.log('error from userModel', err);

      const product = [];
      //if no err it will be NULL
      if (!err) {
        //no error  we want to read data from file
        //Read data from file if it exists
        product = JSON.parse(fileContent);
      }
      //use arrow function so that it point to class
      product.push(this);

      //Write onto file after reading and appending
      fs.writeFile(filePath, JSON.stringify(product), err => {
        console.log('From userModel Error', err);
      });
    });

    // saveData.push(this);
    // return;
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
};
