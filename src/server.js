const fs = require('fs');
const path = require('path');
const https = require('https');

require('dotenv').config();

const app = require('./app');

const PORT = 3000;

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

const config = {
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
};

const server = https.createServer(
	{
		key: fs.readFileSync('key.pem'),
		cert: fs.readFileSync('cert.pem'),
	},
	app
);

server.listen(PORT, () => {
	console.log(`Listening to port ${PORT}`);
});
