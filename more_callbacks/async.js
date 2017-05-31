var async = require('async');
var fs = require('fs');
var filenames = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'
];

async.map(filenames, transform, function(e,s){
	if(e){
		console.log(e);
		return;
	}
	console.log("its work");
});

function transform(item, callback){
	fs.writeFile(item, "hello world!", function(err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null,"it worked");
    });

}