function square(num, callback){
	var res = num * num;
	callback(res);
}



square(5, function(z){
	console.log(z);
});