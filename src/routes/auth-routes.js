const express = require('express');
const router = express.Router();
const {discordAuth} = require('../controllers/authControllers')

router.get('/auth/discord', discordAuth)
router.post('/auth/token', tokenAuth)

module.exports = router