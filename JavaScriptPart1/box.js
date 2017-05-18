function printSquare(num, num1){

	for(let i = 0;i<num ; i++){
		process.stdout.write('\u{1F4A9}');
	}

	console.log('');

	for(let i =0;i< num1  -2; i++){

		process.stdout.write('\u{1F4A9}');

		for(let j = 0;j<num -2; j ++){
			process.stdout.write(' ');
		}

		console.log('\u{1F4A9}');
	}


		for(let i = 0;i<num; i++){
			process.stdout.write('\u{1F4A9}');
		}
		console.log('');
}

printSquare(10,10);