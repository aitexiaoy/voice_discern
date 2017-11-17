var express = require('express');
var voice_ai=require('../public/javascripts/voice_ai/voice_deal.js')
var router = express.Router();

/* GET home page. */
router.post('/', voice_ai.dataInput);

module.exports = router;