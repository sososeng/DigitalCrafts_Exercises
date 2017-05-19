var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }
];

forEach(arr, function(person) {
  console.log('Hello, ' + person.name + '!');
});


function forEach(num, fun){
	for(let i =0;i< num.length;i++){
		fun(num[i]);
	}
}