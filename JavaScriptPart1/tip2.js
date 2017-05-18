function tipAmount(num, str){
	if(str === 'good'){
		return((num*.2 ) + num);
	}
	if(str === 'fair'){
		return((num*.15) + num);
	}
	if(str === 'bad'){
		return((num*.1) + num) ;
	}

}

console.log(tipAmount(100,'good'));