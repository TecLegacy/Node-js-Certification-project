const path = require('path');
//parent driectory
const root = require('../utils/parentDirectory');

//Storing data
const UserModal = require('../model/userModel'); // with model storing data
// const userData = []; //with variable storing data

//GET request to Products
const productGet = (req, res) => {
  // res.sendFile(path.join(root, 'views', 'add-product.html'));
  res.render('admin/add-product.ejs', {
    path: 'products',
    title: 'Add Products',
  });
};

//POST Requst to products
const productPost = (req, res) => {
  //body parser - urlencoded to true

  const price = req.body.price;
  const title = req.body.title;
  const image = req.body.imageUrl;
  const description = req.body.description;
  // console.log(price, image, description, title);
  const userData = new UserModal(title, image, description, price);
  userData.save();

  // userData.push({ title: req.body.title });
  res.redirect('/');
};
module.exports = { productGet, productPost };
