// Node npm packages
var express     = require("express");
var bodyParser  = require("body-parser");
var http        = require("http");

// Server variables
var app      = express();
var httpPort = process.env.PORT || 8080;

// Serve up the public folder to the site
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// Set up view engine to be html to render html
app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// Require the necessary express routes and use them
app.use("/", require("./routes/index.js"));
app.use("/about", require("./routes/about.js"));
app.use("/skills", require("./routes/skills.js"));
app.use("/experience", require("./routes/experience.js"));
app.use("/portfolio", require("./routes/portfolio.js"));

var httpServer = http.createServer(app);
httpServer.listen(httpPort);

console.log("Magic happens on port: " + httpPort);
