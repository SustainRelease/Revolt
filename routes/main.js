module.exports = function (subRoute) {
  var express = require('express');
  var router = express.Router();

  /* GET home page. */
  console.log(subRoute + "/");
  router.get(subRoute + '/', function(req, res, next) {
    res.render('index', {subR: subRoute});
  });

  /* GET about page. */
  router.get(subRoute + '/about', function(req, res, next) {
    res.render('about', {subR: subRoute});
  });

  /* GET designers page. */
  router.get(subRoute + '/designers', function(req, res, next) {
    res.render('designers', {subR: subRoute});
  });

  return router;
}
