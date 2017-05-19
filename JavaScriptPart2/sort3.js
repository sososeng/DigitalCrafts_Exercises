var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];


function red(x,y){
			return x+y;
}

arr = arr.sort(function (x, y) {
  if (x.reduce(red) > y.reduce(red)) { return 1; }
  else if (x.reduce(red) < y.reduce(red)) { return -1; }
  return 0;
});


console.log(arr);





