var express = require('express');
var app = express();
var path = require ("path");

app.get("/", function(req, resp){
	console.log("homepage sent" )
	resp.sendFile(path.join(__dirname + "/index.html"))
});

var port = process.env.PORT || 8080;
app.listen(port,function()
{
	console.log("app running on port "+port);
});