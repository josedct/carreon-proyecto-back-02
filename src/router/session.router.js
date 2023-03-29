const {Router} = require('express')
const {getUser, addUser} = require('./../controllers/models/session.controller')

const router = Router()

router.post('/login',getUser)

router.post('/register',addUser)

module.exports = router