const express = require('express');
const router = express.Router();

const controller = require('../controllers/github');
const validator = require('../validator/github');

router.post('/question', validator.getQuestion, controller.getQuestion);

module.exports = router;