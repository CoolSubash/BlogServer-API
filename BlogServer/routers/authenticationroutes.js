const express = require('express')
const router = express.Router()
const {
  registerLogic,
  loginLogic,
} = require('../Controller/AuthenticationLogic.js')

router.post('/register', registerLogic)
router.post('/login', loginLogic)

module.exports = router
