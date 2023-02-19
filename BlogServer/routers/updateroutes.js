const express = require('express')
const router = express.Router()
const { UpdateLogic, deleteLogic } = require('../Controller/UpdateLogic.js')
router.put('/:id', UpdateLogic)
router.delete('/:id', deleteLogic)

module.exports = router
