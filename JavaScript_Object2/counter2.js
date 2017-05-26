function counter(count){
	let c = count;
	return(function counting(){
		console.log(c);
		c+=1;
	});
}

var c1 = counter(1);
var c2 = counter(1);
c1();
c2();
c1();
c2();