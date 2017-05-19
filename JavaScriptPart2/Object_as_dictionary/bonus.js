function letterHistogram(text){
	let his={};

	let st = text.split('');

	for(let i =0;i<st.length;i++){
	
		
		 	his[st[i]] = 0;
		 
	}

	for(let i =0;i<st.length;i++){
	
		
		 	his[st[i]] = his[st[i]] + 1;
		 
	}

	return his;

}

let dict = letterHistogram("bananas");

var letters = Object.keys(dict).map(function(key){
	return [key,dict[key]];
}); 

var res = letters.sort(function(x,y){
 return y[1] - x[1];
});

console.log(res[0]);

console.log(res[1]);