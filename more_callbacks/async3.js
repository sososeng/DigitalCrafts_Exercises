var async = require('async');
var fs = require('fs');
var path = require('path');

var filenames = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt',
  '11.txt'
];


var myfiles= [];


function checkfile(item, callback){


	fs.readdir(".", function(err, items) {
		for(let i = 0 ;i < items.length;i++){
			if(item ===items[i]){
				myfiles.push(item);
				console.log(item);
			}
		}
	});
    


}


async.filter(filenames,checkfile,function(e,r){
	if(e){
		console.log(e);
	}
});