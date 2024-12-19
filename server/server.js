const routes = require('./routes/routes.js');
const port = 5000;
const express = require('express');
const app = express();

app.use('/', routes);

app.listen(port, err => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(`Server running on port, ${port}`);
});
