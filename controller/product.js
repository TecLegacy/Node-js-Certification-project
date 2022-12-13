const Model = require('../model/userModel');

//Storing data
const UserModal = require('../model/userModel'); // with model storing data
// const userData = []; //with variable storing data

//GET request to Products
const productGet = (req, res) => {
  // res.sendFile(path.join(root, 'views', 'add-product.html'));
  res.render('admin/add-product.ejs', {
    path: 'add-products',
    title: 'Add Product',
  });
};

//POST Requst to products
const productPost = (req, res) => {
  //body parser - urlencoded to true
  const price = req.body.price;
  const title = req.body.title;
  const image = req.body.imageUrl;
  const description = req.body.description;

  const userData = new UserModal(title, image, description, price);
  userData.save();

  res.redirect('/');
};

const editGet = (req, res) => {
  //Edit page is same as Add just input changes
  Model.fetchAll(products => {
    res.render('admin/product.ejs', {
      path: 'products',
      title: 'Edit Product',
      info: products,
    });
  });
};

module.exports = { productGet, productPost, editGet };
