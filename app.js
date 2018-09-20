var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
   res.send("hi there!"); 
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
   res.send("goodbye!"); 
});

// "/dog" => "Mewo!"
app.get("/dog", function(req, res) {
   res.send("<i>MEOW!</i>"); 
   console.log("someone made a request to /dog");
});

//Generic pattern matching. Matches any request to /r/<something>
// the : treats what preceeds it as a route paremter instead of literal.
app.get("/r/:subredditName", function(req, res) {
   res.send("Welcome to the " + req.params.subredditName + " subreddit"); 
});

// Catch all route for any route that's not defined. The order of routes matters, so we need this at the bottom. First route that matches a given request will only be ran.
app.get("*", function(req, res) {
   res.send("You are a star!"); 
});

// Tell express to listen for request (start server)

// special argument cause running on cloud9... process.env.PORT/IP is an environment variable. Just returns a number. We would just put in our own port number, whatever it is.
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server has started!!!");
}); 