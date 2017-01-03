var Controller = require('../../lib/controller');
var Product = require('./product-facade');

class ProductController extends Controller {}

module.exports = new ProductController(Product);