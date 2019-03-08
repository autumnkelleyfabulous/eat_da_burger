var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');


var port = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride("_method"));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);



// var express = require("express");
// var app = module.exports = express();
// var path = require("path");

// // require('./config/orm.js')(app, express);

// app.set('views', __dirname + '/views');

// require('./config/connection.js')

// app.listen(3000);

// var PORT = process.env.PORT || 8080;

// var app = express();

// // Serve static content for the app from the "public" directory in the application directory.
// // var path = require ('path');
// app.use(express.static(path.join(__dirname + '.../public')));

// app.use(express.static("public"));

// // Parse application body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// var routes = require("./controllers/burgers_controller.js");

// app.use(routes);

// // Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });
