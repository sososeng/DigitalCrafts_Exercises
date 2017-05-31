var fs = require("fs");

fs.readFile('file2.txt',function(err,buffer){
	if(err){
		console.log(err);
		return;
	}
	console.log(buffer.toString().toUpperCase());
});