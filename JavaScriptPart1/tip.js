function tipAmount(num, str){
	if(str === 'good'){
		return(num*.2);
	}
	if(str === 'fair'){
		return(num*.15);
	}
	if(str === 'bad'){
		return(num*.1);
	}

}

console.log(tipAmount(100,'good'));