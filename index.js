var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/dist'));
app.use("/app", express.static(__dirname + "/app"));
app.use("/dist", express.static(__dirname + "/dist"));


app.get('/', function(request, response) {
  response.render('dist/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
