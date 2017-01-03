const Router = require('express').Router;
const router = new Router();

const user  = require('./model/user/user-router');
const product = require('./model/product/product-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to api API!' });
});

router.use('/auth', require('./auth'));

router.use('/users', user);

router.use('/products', product);


module.exports = router;
