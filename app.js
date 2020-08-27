var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var configValue = require("./config");
var mongoose = require("mongoose");
var setupController = require("./api/controller/setupController");
var todoController = require("./api/controller/todoController");


var app = express();
var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.set("view engine", "ejs");
mongoose.connect(configValue.getDbConnectionString(),{ useUnifiedTopology: true }, function (err) {
  
  if(err) {
    console.error('Can not connect to mongodb', err)
  } else {

    console.log("Connect succsess!");

  }
  
});

app.get("/", function (req, res) {
  res.render("index.ejs");
});
setupController(app);
todoController(app);
app.listen(port, function (err) {
    if(err) throw err;
  console.log("App listening on port " + port);
});
