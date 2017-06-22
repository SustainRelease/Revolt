module.exports = function (subRoute) {
  var express = require('express');
  var router = express.Router();

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', {subR: subRoute});
  });

  /* GET about page. */
  router.get('/about', function(req, res, next) {
    res.render('about', {subR: subRoute});
  });

  /* GET designers page. */
  router.get('/designers', function(req, res, next) {
    res.render('designers', {subR: subRoute});
  });

  router.get('/products', function(req, res, next) {
    res.render('products', {subR: subRoute});
  });

  router.get('/contact', function(req, res, next) {
    res.render('contact', {subR: subRoute});
  });


  return router;
}
