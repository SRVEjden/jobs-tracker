const MONGO_URI =
	process.env.MONGO_URI || 'mongodb://root:root@localhost:27017';
const dbName = process.env.DB_NAME || 'JobsTracker';
require('dotenv').config();
const mongoose = require('mongoose');

module.exports = async function getConnection() {
	try {
		return await mongoose.createConnection(MONGO_URI).useDb(dbName);
	} catch (error) {
		console.error(error);
	}
};
