var express = require("express"),
    app     = express(),
    port    = process.env.PORT || 1337;

app.use(express.static(__dirname + '/build'));

// 404 Error Handling
app.use(function(req, res, next){
  res.status(404).sendfile(__dirname + '/404.html');
});

app.listen(port);
console.log("web server started on port " + port);
