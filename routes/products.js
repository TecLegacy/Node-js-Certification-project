const express = require('express');

const productsRouter = express.Router();

//controller POST and GET
const { productGet, productPost, editGet } = require('../controller/product');

productsRouter.get('/add-product', productGet);

productsRouter.post('/add-product', productPost);

//EDIT products
productsRouter.get('/products', editGet);
// productsRouter.get('/edit-product',editPost)

exports.productsRouter = productsRouter;
