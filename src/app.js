const path = require('path');
const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.get('/', (req, res) => {
	return res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/secret', (req, res) => {
	return res.send('Here are secret data');
});

module.exports = app;
