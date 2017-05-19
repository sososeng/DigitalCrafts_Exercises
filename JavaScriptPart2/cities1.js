var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function temp(a){
	return a["temperature"] < 70;
}

cities = cities.filter(temp);

cities = cities.map(function(item){
	return item["name"];
});

console.log(cities);
