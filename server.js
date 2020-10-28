const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '')));

const io = require('socket.io')(server);

app.post('/', function(req, res) {
	io.emit('user talking', req.body);
	res.sendStatus(200);
});

server.listen(3000, () => {
	console.log('I am listening on port 3000!');
});
