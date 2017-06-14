var express = require('express');
var router = express.Router();
var db = require('./db')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/add', function(req, res, next) {
    console.log(req.query)
    db.add(req.query)
    res.send('123')
});

module.exports = router;
