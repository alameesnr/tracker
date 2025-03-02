const express = require('express')
const router = express.Router()

const {signup, signin} = require('../controllers/authcontrollers.js')


router.post('/', signup)
router.post('/login', signin)

module.exports = router