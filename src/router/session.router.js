const {Router} = require('express')
const {getUser, addUser} = require('./../controllers/models/session.controller')
const  passportCall = require('./../helpers/passportCall')

const router = Router()

router.post('/login', passportCall('login'), getUser)

router.post('/register', passportCall('register'), addUser)

module.exports = router