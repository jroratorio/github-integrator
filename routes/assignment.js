const express = require('express');
const router = express.Router();

const controller = require('../controllers/assignment');
const validator = require('../validator/assignment');

router.post('/', validator.findRepos, controller.findRepos);

module.exports = router;