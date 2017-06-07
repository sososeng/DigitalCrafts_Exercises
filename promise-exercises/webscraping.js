axios = require("axios");

var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];


var p =[];

for(let i  = 0 ;i< urls.length;i++){
	p.push(axios.get(urls[i]));
}



Promise.all(p)
  .then(function (responses) {
  	for(let i = 0;i<responses.length;i++){
  		//console.log(responses[i].data);
  	}
  });