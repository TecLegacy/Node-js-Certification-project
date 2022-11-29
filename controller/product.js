const path = require('path');
//parent driectory
const root = require('../utils/parentDirectory');

//Storing data
const UserModal = require('../model/userModel'); // with model storing data
// const userData = []; //with variable storing data

//GET request to Products
const productGet = (req, res) => {
  // res.sendFile(path.join(root, 'views', 'add-product.html'));
  res.render('shop/add-product.ejs', {
    path: 'products',
    title: 'Add Products',
  });
};

//POST Requst to products
const productPost = (req, res) => {
  //body parser - urlencoded to true

  const userData = new UserModal(req.body.title);
  userData.save();

  // userData.push({ title: req.body.title });
  res.redirect('/');
};
module.exports = { productGet, productPost };
