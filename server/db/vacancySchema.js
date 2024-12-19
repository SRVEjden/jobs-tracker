const { Schema } = require('mongoose');

module.exports = function getVacancyModel(connection) {
	return connection.model(
		'Vacancy',
		new Schema({
			companyName: String,
			vacancy: String,
			note: String,
			salaryRange: String,
			responseStatus: String,
		})
	);
};
