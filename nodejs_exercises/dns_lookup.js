var dns = require("dns");
var host = "google.com";

dns.lookup(host, function(err,ip){
	if(err){
		console.log(err);
		return;
	}
	console.log(host);
	console.log("ip:", ip);
});