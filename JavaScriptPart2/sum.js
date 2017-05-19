function sum (a){
	return a.reduce(function(x,y){return x + y;});
}

console.log(sum([1,2,3]));