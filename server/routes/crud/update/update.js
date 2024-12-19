const express = require('express');
const router = express.Router();
const getConnection = require('../../../db/connection.js');
const getVacancyModel = require('../../../db/vacancySchema.js');
router.patch('/update', async (req, res) => {
	if (!req?.body) {
		console.log(req.body);
		return res.sendStatus(500);
	}
	try {
		const { id, companyName, note, responseStatus, vacancy, salaryRange } =
			req.body;
		const connection = await getConnection();
		const vacancyModel = getVacancyModel(connection);
		await vacancyModel.findByIdAndUpdate(id, {
			companyName,
			note,
			salaryRange,
			responseStatus,
			vacancy,
		});
		return res.status(200).json({ id });
	} catch (error) {
		console.error(error);
		return res.sendStatus(500);
	}
});
module.exports = router;
