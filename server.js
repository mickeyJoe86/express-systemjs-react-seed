var express = require('express');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.use('/jspm_packages', express.static(__dirname + '/jspm_packages'));
app.use('/', express.static(__dirname + '/app'));
app.use('/config', express.static(__dirname + '/'));

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/app/index.html');
});

app.listen(app.get('port'), function() {
  console.log('App is running on port', app.get('port'));
});