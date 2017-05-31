var readLine = require('readline');
var fs = require('fs');
var request = require('request');


var rl = readLine.createInterface({
	input:process.stdin,
	output:process.stdout
});



rl.question("url?",function(myurl){

	request.get(myurl, function(err,resp,html){

	if(err){
		console.log(err);
		return;
	}

	var secondfile ;
	rl.question("write to save?",function(name){
		secondfile = name;

	
	fs.writeFile(secondfile,html,function(){
		if(err){
			console.log(err);
			return;
		}

		console.log(html);
		rl.close();
	});

	});


	});

});
