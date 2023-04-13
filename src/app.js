const path = require('path');
const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());

const middleware = (req, res, next) => {
	const isLogged = true;

	if (!isLogged) {
		return res.status(401).json({
			error: 'You should log in first, please',
		});
	}

	next();
};

app.get('/auth/google', (req, res) => {});

app.get('/auth/google/callback', (req, res) => {});

app.get('/auth/logout', (req, res) => {});

app.get('/secret', middleware, (req, res) => {
	return res.send('Here are secret data');
});

app.get('/', (req, res) => {
	return res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
