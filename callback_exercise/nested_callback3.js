function square(num, callback){
	callback(num * num);
}

function sum (x, y, callback) {
	callback(x + y);
}

function root(num, callback){
	callback(Math.sqrt(num));
}



square(2, function(q1){

	var qone = q1;

	square(3, function(q2){

		sum(q1,q2, function(sqres){
			root(sqres, function(sumres){
				console.log(sumres);
			});
	});
	});

	
});