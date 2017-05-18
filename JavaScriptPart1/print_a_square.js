function printSquare(num){

	for(let i =0;i< num ; i++){
		for(let j = 0;j<num ; j ++){
			process.stdout.write('\u{1F4A9}');
		}
		console.log('');
	}
}

printSquare(10);