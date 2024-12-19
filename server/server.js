require('dotenv').config();
const routes = require('./routes/crud/routes.js');
const middlewares = require('./middleware/middlewares.js');
const express = require('express');
const port = process.env.PORT || 5000;

const app = express();
app.use(middlewares);
app.use('/', routes);
app.listen(port, err => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(`Server running on port, ${port}`);
});
