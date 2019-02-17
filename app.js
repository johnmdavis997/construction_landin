var express = require("express");
var app = express();

app.use(express.static("public")); // Tells express to serve the contents of the public directory
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/about", function(req, res) {
    res.render("about");
});

// Creates server
app.listen(process.env.PORT || 3000, function (req, res) {
    console.log("I'm not gay but dick be lookin tasty sometimes");
});

