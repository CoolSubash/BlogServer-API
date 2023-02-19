const express = require('express')
const router = express.Router()
const {
  PostLogic,
  PostgetLogic,
  Postupdate,
  SinglepostLogic,
} = require('../Controller/PostLogic.js')

router.post('/postupdate', PostLogic)
router.get('/posts', PostgetLogic)
router.put('/posts/:id', Postupdate)
router.get('/posts/:id', SinglepostLogic)

module.exports = router
