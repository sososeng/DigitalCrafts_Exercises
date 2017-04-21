// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var Tea = require('./models/tea');
var bodyParser = require('body-parser');

// Load required packages
var app = express();


// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Connect to the tealocker MongoDB
mongoose.connect('mongodb://localhost:27017/teaocker');

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Create our Express router
var router = express.Router();

// Initial dummy route for testing
// http://localhost:3000/api
//router.get('/', function(req, res) {
//  res.json({ message: 'Drink some tea !' });
//});

// Create a new route with the prefix /teas
var teasRoute = router.route('/teas');

// Create endpoint /api/teas for POSTS
teasRoute.post(function(req, res) {
  // Create a new instance of the Tea model
 var tea = new Tea();

  // Set the tea properties that came from the POST data
  tea.name = req.body.name;
  tea.quantity = req.body.quantity;

  // Save the tea and check for errors
  tea.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Tea added to the locker!', data: tea });
  });
});


// Create endpoint /api/teas for GET
teasRoute.get(function(req, res) {
  // Create a new instance of the Tea model
  
  // Use the Tea model to find all tea
  Tea.find(function(err, teas) {
    if (err)
      res.send(err);

    res.json(teas);
  });
});

// Create a new route with the /teas/:tea_id prefix
var teaRoute = router.route('/teas/:tea_id');

// Create endpoint /api/teas/:tea_id for GET
teaRoute.get(function(req, res) {
  // Use the Tea model to find a specific tea
  Tea.findById(req.params.tea_id, function(err, tea) {
    if (err)
      res.send(err);

    res.json(tea);
  });
});

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Insert tea on port ' + port);