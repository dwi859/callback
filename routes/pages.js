var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   
    res.render('index',{
        h1 : 'BabaStudio Keren'
    });
});

router.get('/product', function(req, res){
   
    res.render('index',{
        h1 : 'product - products'
    });
});

module.exports = router;