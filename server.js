//DEPENDENCIES
//===============================
//require express
var express = require("express");
//require body-parser
var bodyParser = require("body-parser");
//require path
var path = require("path");


//================================
//Express Configuration
var app = express()
//set up port
var PORT = process.env.PORT || 8080;
//BodyParser Interprets Infor Sent To Server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));
//makes sure I can read my css files
app.use(express.static(path.join(__dirname, './app')));


//================================
//Router: points to route files
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);
//Default USE route goes to home
	app.use(function(req, res) {
	   res.sendFile(path.join(__dirname, "/../app/index.html"));
	});

//================================
//Listener
app.listen(PORT,function(){
	console.log("App listening on PORT: " + PORT);
});