const express = require('express');
const cors = require('cors');
const router = express.Router();

router.use(cors());
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

module.exports = router;
