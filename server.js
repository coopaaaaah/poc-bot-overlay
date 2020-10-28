const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/', function(req, res) {
	console.log(req.body);
	res.sendStatus(200);
});


app.get('/', function(req, res) {
	res.send('hi there');
});

app.listen(3000, () => {
	console.log('I am listening on port 3000!');
});
