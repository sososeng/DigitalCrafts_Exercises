function letterHistogram(text){
	let his={};

	let st = text.split('');

	for(let i =0;i<st.length;i++){
	
		
		 	his[st[i]] = 0;
		 
	}

	for(let i =0;i<st.length;i++){
	
		
		 	his[st[i]] = his[st[i]] + 1;
		 
	}

	console.log(his);

}

letterHistogram("bananas");