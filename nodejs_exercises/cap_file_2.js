var readLine = require('readline');
var fs = require('fs');

var rl = readLine.createInterface({
	input:process.stdin,
	output:process.stdout
});



rl.question("read file?",function(name){
	fs.readFile(name, function(err,buffer){
	if(err){
		console.log(err);
		return;
	}

	var secondfile ;
	rl.question("write file?",function(name){
		secondfile = name;

	var st;


	st = buffer.toString().toUpperCase();
	fs.writeFile(secondfile,st,function(){
		if(err){
			console.log(err);
			return;
		}

		console.log(st);
		rl.close();
	});

	});




	});

});




