var express = require('express');
var app = express();
app.set('view engine', 'hbs');

const body_parser = require('body-parser');
app.use(body_parser.urlencoded({extended: false}));

var pgp = require('pg-promise')({
  // initialization options
});

var db = pgp({database: 'todo'});

app.get('/todos', function (request, response) {
  db.query('select * from task')
  	.then(function (results) {

      response.render('list.hbs',{tasks:results});
  		pgp.end();
  	});

});

//  id serial PRIMARY KEY, description varchar, done boolean
app.get('/add', function(request, response) {
  response.render('form.hbs');
});

app.post('/submit', function (request, response) {
  var biz = {task: request.body.task};
  var q = "INSERT INTO task VALUES (default, ${task})";
  db.result(q, biz)
    .then(function (result) {
      console.log(result);
      response.send('OK');
      pgp.end();
    });

});

app.get('/done/:id', function(request,response){
  var id = request.params.id;
  var q = "UPDATE task SET done = TRUE where id = $1";

  db.result(q, [id])
    .then(function (result) {
      response.send('OK');
      pgp.end();
    });
});



app.listen(8000, function () {
  console.log('Listening on port 8000');
});
