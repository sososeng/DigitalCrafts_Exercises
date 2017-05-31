function square(num, callback){
	callback(num * num);
}


function sum (x, y, callback) {
	callback(x + y);
}



square(2, function(total){

	var one = total;
	square(3,function(total1){
		sum(total, total1, function(res){
		console.log(res);
	});
	});


});
