var http = require('http');
var url = require('url');

var myServer = http.createServer(function(request, response){

	response.writeHead(
		200,
		{
			"Content-Type" : "text/html"
		}
	);
	
	var date = url.parse(request.url, true).query;
  	var txt = date.month + " " + date.year;
	response.write("<h2>NodeJs</h2> Print html using nodejs only" + '<br/>');
	response.write("You selected date : " + txt);
	response.end();
	
}); //createServer
myServer.listen(3333);