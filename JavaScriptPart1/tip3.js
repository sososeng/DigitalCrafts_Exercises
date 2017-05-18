function tipAmount(num, str, div){
	if(str === 'good'){
		return(((num*.2 ) + num)/ div);
	}
	if(str === 'fair'){
		return(((num*.15) + num) / div);
	}
	if(str === 'bad'){
		return(((num*.1) + num) / div);
	}

}

console.log(tipAmount(100,'good', 5));