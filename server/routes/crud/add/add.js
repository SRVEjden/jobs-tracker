const express = require('express');
const router = express.Router();
const getVacancyModel = require('../../../db/vacancySchema.js');
const getConnection = require('../../../db/connection.js');
router.post('/add', async (req, res) => {
	if (!req.body) {
		return res.sendStatus(500);
	}
	const { companyName, vacancy, note, salaryRange, responseStatus } = req?.body;
	try {
		const connection = await getConnection();
		const vacancyModel = getVacancyModel(connection);
		const newVacancy = new vacancyModel({
			companyName,
			vacancy,
			note,
			salaryRange,
			responseStatus,
		});
		await newVacancy.save();
		connection.close();
		return res.status(200).json({ id: newVacancy._id });
	} catch (error) {
		console.error(error);
	}
});
module.exports = router;
