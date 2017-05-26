function counter(){
	let count = 0;

	return(function counting(){
		console.log(count);
		count+=1;
	});
}

var c1 = counter();
var c2 = counter();
c1();
c2();
c1();
c2();