var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use("/app", express.static(__dirname + "/app"));
app.use("/dist", express.static(__dirname + "/dist"));


app.get('/', function(request, response) {
  response.sendFile('./dist/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
