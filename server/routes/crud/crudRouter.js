const express = require('express');
const router = express.Router();
const addRoute = require('./add/add.js');
const deleteRoute = require('./delete/delete.js');
const updateRoute = require('./update/update.js');
const getRoute = require('./get/get.js');

router.use('/', addRoute);
router.use('/', deleteRoute);
router.use('/', updateRoute);
router.use('/', getRoute);
module.exports = router;
