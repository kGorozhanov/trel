const Router = require('express').Router;
const router = new Router();

const user  = require('./model/user/user-router');
const dashboard = require('./model/dashboard/dashboard-router');
const column = require('./model/column/column-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to api API!' });
});

router.use('/auth', require('./auth'));

router.use('/users', user);

router.use('/dashboards', dashboard);

router.use('/columns', column);


module.exports = router;
