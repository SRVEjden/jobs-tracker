const express = require('express');
const getConnection = require('../../../db/connection.js');
const getVacancyModel = require('../../../db/vacancySchema.js');
const router = express.Router();

router.delete('/delete', async (req, res) => {
	if (!req?.body) return res.sendStatus(500);
	try {
		const { id } = req.body;
		const connection = await getConnection();
		const vacancyModel = getVacancyModel(connection);
		await vacancyModel.findByIdAndDelete(id);
		connection.close();
		return res.status(200).send({ id });
	} catch (error) {
		console.error(error);
		return res.sendStatus(500);
	}
});
module.exports = router;
