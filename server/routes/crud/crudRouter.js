const express = require('express');
const router = express.Router();
const addRoute = require('./add/add.js');
const deleteRoute = require('./delete/delete.js');
const updateRoute = require('./update/update.js');
const getRoute = require('./update/update.js');

router.use('/', addRoute);
router.use('/', deleteRoute);
router.use('/', updateRoute);
router.use('/', getRoute);
module.exports = router;
