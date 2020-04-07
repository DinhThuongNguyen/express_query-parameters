var express = require('express');
// var pug = require ('pug');
var app = express();
var port = 3008;

app.set('view engine', 'pug');
app.set('views', './');
var arr_ten = [
	{id: 1, name: 'nhi'},
	{id: 2, name: 'thương'},
	{id: 3, name: 'gái'}
];

app.get('/', function(request, response) {
	response.send('hello co ba');
});
app.get('/ten', function(req, res) {
	res.render('data.pug',{
		ten: arr_ten
	})
});
app.get('/ten/search', function(req, res) {
	var q = req.query.q;
	var find_q = arr_ten.filter(function(item){
		return item.name.indexOf(q) != -1;
	})
	res.render('data.pug', {
		ten:find_q
	})
})
app.listen(port, function() {
	console.log('da tao port '+port);
})