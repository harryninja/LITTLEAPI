var express = require("express");
var bodyParser = require('body-parser');

var index = require('./routes/index');
var services = require('./routes/services');

var app = express();

app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use('/services', services);
app.use('/', index);

app.listen(8123);
