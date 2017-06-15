var express = require('express');
var router = express.Router();
var db = require('./db')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/add', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");

    res.send( db.add(req.query))
});

module.exports = router;
