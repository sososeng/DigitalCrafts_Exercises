var request = require('request');
var fs = require('fs');

function saveWebPage(theurl, out, callback){

  request.get(theurl, function(err, response, html) {
    if (err) {
      callback(err);
      return;
    }
    fs.writeFile(out, html, function(err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null,"it worked");
    });
  });

}


saveWebPage('https://en.wikipedia.org/wiki/Continuation-passing_style', 'output.txt', function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});