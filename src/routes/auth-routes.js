const express = require('express');
const router = express.Router();
const {discordAuth, generateToken, validateToken} = require('../controllers/authControllers')

router.get('/auth/discord', discordAuth)
router.post('/auth/token', generateToken)
router.get('/auth/token', validateToken)

module.exports = router