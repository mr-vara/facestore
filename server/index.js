var express = require('express');
var app = express();
const faces = require('cool-ascii-faces').faces;

//include "items" module, which contains functionality related to products
var items = require('./lib/items.js')(faces);

app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);

//link public folder to root
app.get('/', function(req, res){
    res
        .status( 200 )
        .set( { 'content-type': 'text/html; charset=utf-8' } )
        .sendfile('public/index.html' );
});

//Return api according to "page" and "sortBy" by using "items" module
app.get('/api/products', function(req, res){
    var page = req.param("page");
    var sortBy = req.param("sortBy");
    if(sortBy) 
        items.sortProducts(sortBy);
    if(page) {
        items.data.page = page;
        res.json(items.sliceProducts(page));
    }
    else 
        res.json(items.data);
});

// custom 404 page
app.use(function(req, res, next){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +  app.get('port') + '; press Ctrl-C to terminate.' );
});
