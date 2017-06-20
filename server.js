
var express = require('express');
var path = require('path');

var app = express();
var bodyParser = require('body-parser');
var session=require("express-session");


app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "./client")))
app.use(express.static(path.join(__dirname, "./node_modules")))
app.use(session({
	secret: "rat secret",
	resave: false,
	saveUninitialized: false,
}))


require("./server/config/mongoose.js");

var routes_setter=require("./server/config/routes.js");
routes_setter(app);



app.listen(3000, function() {
    console.log("listening on port 3000");
})
