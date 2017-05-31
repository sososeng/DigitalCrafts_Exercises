var async = require('async');
var fs = require('fs');
var path = require('path');
var gm = require('gm');



pics = [];
fs.readdir(".", function(err, items) {
	for (let i = 0 ;i< items.length; i++){
		if(path.extname(items[i]) ==='.png'){
			console.log(items[i]);
			pics.push(items[i]);
		}
	}

	async.map(pics, resize, function(e,s){
	if(e){
		console.log(e);
		return;
	}
	console.log("ok its work");
    

});



function resize(item,callback) {


	    gm(item)
	      .resize(240, 240)
	      .write("out.png", function(err) {
	        if (err) {
	          console.log(err);
	          return;
	        }
	        console.log('It worked');
	      });
}



