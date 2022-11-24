const express = require('express');

const productsRouter = express.Router();

//controller POST and GET
const { productGet, productPost } = require('../controller/product');

productsRouter.get('/', productGet);

productsRouter.post('/', productPost);

exports.productsRouter = productsRouter;
