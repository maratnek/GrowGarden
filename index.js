var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('public', __dirname + '/public');
//app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	res.send('Invalid Endpoint');
  // response.render('index');
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


