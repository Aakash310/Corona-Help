var express = require("express");
var app = express();
var covidRoutes = require("./routes/Covid");

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(covidRoutes);

var port = process.env.PORT || 3000;
app.listen(port,function(){
	console.log("Server is Started!");
});
