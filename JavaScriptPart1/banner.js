function printBanner(st){

	for( let i = 0; i< st.length + 4;i ++){
		process.stdout.write('\u{1F4A9}');
	}
	console.log('');
	process.stdout.write('\u{1F4A9} ' + st + ' \u{1F4A9}' );
	console.log('');
	for( let i = 0; i< st.length + 4;i ++){
		process.stdout.write('\u{1F4A9}');
	}
	console.log('');
}

printBanner('Welcome to DigitalCrafts');