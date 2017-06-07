var express = require('express');
var app = express();
app.set('view engine', 'hbs');

app.use('/static',express.static('public'));
var animals = [
  { name: 'cats', favorite: true },
  { name: 'dogs', favorite: true },
  { name: 'tree frogs', favorite: true },
  { name: 'earth worms', favorite: false },
  { name: 'guinea pigs', favorite: true },
];

app.get('/',function(request,response){
  response.render('helloWorld.hbs');
});

app.get('/cats',function(request,response){
  response.render('meow.hbs');
});

app.get('/dogs',function(request,response){
  response.render('woof.hbs');
});

app.get('/cats_and_dogs',function(request,response){
  response.render('livingtogether.hbs');
});




app.get('/year',function(request,response){
  let age = request.query.age || 0;
  response.render('age.hbs',{age :(2017-age)});
});


app.get('/greet/:name', function (request, response) {
  var name = request.params.name;
  var age = request.query.age || 0;
  var context = {name:name, age:(2017 -age)};
  response.render('template1.hbs', context);
});


app.get('/fav_animals',function(request,response){
  response.render('template2.hbs',{animals:animals});
});

app.get('/',function(request,response){
  response.render('layout.hbs');
});

app.listen(8000);
