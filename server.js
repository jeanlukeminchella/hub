var express = require('express');
var app = express();

app.get("/", function(req, resp){
	console.log("homepage sent" )
	resp.sendFile("/index.html")
});

var port = process.env.PORT || 8080;
app.listen(port,function()
{
	console.log("app running on port "+port);
});