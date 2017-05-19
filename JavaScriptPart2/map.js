function map (arr, fun){

	let re = [];

	for(let i = 0;i < arr.length; i ++){
		re.push(fun(arr[i]));
	}
	return re;
}

var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }
];

console.log(map(arr, function(person) {
  return ('Hello, ' + person.name + '!');
}));