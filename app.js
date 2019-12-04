var express = require('express');
var path = require('path');

var app = express();

app.set('views',path.join(__dirname, 'views')); //menaruh file tampilan
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public'))); //menaruh gambar,jss,css dll di public

var pages = require('./routes/pages.js');

app.use('/', pages);

var port = 3000;
app.listen(port, function(){
    console.log('Server berjalan dengan port' + port);
});