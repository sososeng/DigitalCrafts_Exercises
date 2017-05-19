function acronym (a){
	return a.reduce(function(x,y){
			
			console.log(x + y);
			return x + y.charAt(0);


		
	}, '', '');
}

console.log(acronym(['very', 'important', 'person']));

console.log(acronym(['national', 'aeronautics', 'space', 'administration']));