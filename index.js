var express = require('express');
var app = express();

var fs = require('fs');
var vs = require('./viewService');


app.set('views', './views');
app.set('view engine', 'cshtml');
app.set('port', (process.env.PORT || 5000));
app.use(express.static('./public'));

var title = "Kaddish R US";


app.get('/', function (req, res) {

    var params = { title: title, pages: vs.getNav(req.originalUrl) };


    res.render('Index', params);
});



app.get('/about', function (req, res) {
    var params = { title: title + " - about us", pages: vs.getNav(req.originalUrl) };
    res.render('About', params);
});

app.get('/contact', function (req, res) {
    var params = { title: title + " - contact us", pages: vs.getNav(req.originalUrl), email: "info@kaddishinisrael.com" };
    res.render('Contact', params);
});

app.get('/services', function (req, res) {
    var params = { title: title + " - our services", pages: vs.getNav(req.originalUrl) };
    res.render('Services', params);
});

app.get('/order', function (req, res) {
    var params = { title: title + " - choose your program", pages: vs.getNav(req.originalUrl), plans: vs.plans };
    res.render('Order', params);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});




