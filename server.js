var app = express();

app.get("/", function(req, resp){
	console.log("homepage sent" )
	resp.sendFile("/index.html"))
});