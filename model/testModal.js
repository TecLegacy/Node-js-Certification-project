const fs = require('fs');
const path = require('path');
const root = require('../utils/parentDirectory');

const main = path.join(root, 'data', 'keshav.json');

const readKeshav = cb => {
  fs.readFile(main, (err, fileContent) => {
    if (err) {
      console.log(err);
      cb([]);
    } else {
      console.log(cb(JSON.parse(fileContent)));
    }
  });
};

// creating a user modal
module.exports = class UserKeshav {
  constructor(t, img, des, price) {
    this.title = t;
    this.img = img;
    this.des = des;
    this.price = price;
  }

  save() {
    //  read file and then write
    readKeshav(product => {
      product.push(this);
      fs.writeFile(main, JSON.stringify(product), err => {
        console.error(err);
      });
    });
  }
};
