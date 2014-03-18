var express = require("express"),
    app     = express(),
    port    = process.env.PORT || 1337;

app.use(express.static(__dirname + '/build'));

app.use(function(req, res, next){
  console.log(__dirname);
  res.status(404).sendfile(__dirname + '/404.html');
});

app.listen(port);
console.log("web server started on port " + port);
