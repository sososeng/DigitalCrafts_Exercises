
var request = require('request-promise');
var fs = require('fs-promise');

function saveWebPage(url,filename){
   request.get(url)
  .then(function(buffer) {
    return fs.writeFile(filename, buffer);
  })
  .then(function() {
    console.log('Wrote to file');
  })
  .catch(function(err) {
    console.log('Something went wrong');
    console.log(err.message);
  });

}

saveWebPage("http://google.com","google.html");