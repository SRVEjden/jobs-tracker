const crudRouter = require('./crud.js');
const express = require('express');
const router = express.Router();

router.use('/api', crudRouter);
module.exports = router;
