var request = require('request');
var fs = require('fs');
var gm = require('gm');

var options = {
  url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
  encoding: null
};
request(options, function(err, response, imageData) {
  // save image data and resize
  if(err){
  	console.log(err);
  	return;
  }
  gm(imageData).resize(240,240).write('test.png',function(err){
  	if(err){
  		console.log(err);
  		return;
  	}
  	console.log("it worked");
  });


});