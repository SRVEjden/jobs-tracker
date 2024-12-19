const express = require('express');
const router = express.Router();
const getConnection = require('../../../db/connection.js');
const getVacancyModel = require('../../../db/vacancySchema.js');
router.get('/get', async (req, res) => {
	try {
		const connection = await getConnection();
		const vacancyModel = getVacancyModel(connection);
		const result = await vacancyModel.find(
			{},
			'companyName vacancy note responseStatus salaryRange'
		);
		connection.close();
		return res.status(200).json(result);
	} catch (error) {
		console.error(error);
		return res.sendStatus(500);
	}
});
module.exports = router;
