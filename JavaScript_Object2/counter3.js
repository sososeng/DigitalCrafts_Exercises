function counter(count){
	var c = count;
	function counting(){
		this.count = c;
	}
	counting.prototype.increment = function() {
		console.log(this.count +=1);
		
	};

		counting.prototype.decrement = function() {
		console.log(this.count -= 1);
	};

 	return new counting();
}

var c1 = counter(1);
var c2 = counter(1);
c1.increment();
c2.increment();
c1.decrement();
c2.decrement();