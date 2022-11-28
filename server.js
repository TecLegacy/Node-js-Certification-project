const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const shopRouter = require('./routes/shop');
const router = require('./routes/products');

//root directory
const root = require('./utils/parentDirectory');

const app = express();

//PUG
app.set('view engine', 'ejs'); //defining template engine for express to know
app.set('views', 'views'); //changing default view

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));

//server File statitcally (css to views)
app.use(express.static(path.join(root, 'public')));

//Routes homePage
app.use('/products', router.productsRouter);
app.get('/', shopRouter);

//404 page
// app.use((req, res) => {
//   res.send('<h1>404 Page not found!</h1>');
// });
app.use(require('./controller/error'));

//create server
app.listen(3003);
