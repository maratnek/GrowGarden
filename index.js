const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

// const users = require('./routes/users');

// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Index Route
app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
})

// Start Server
app.listen(port, () => {
	console.log('Server started on port ' + port);
});

