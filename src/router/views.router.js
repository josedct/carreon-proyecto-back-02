const {Router} = require('express')
const {getViewProducts, getViewProduct, getViewCart, getLogin, getRegister, getError} = require('./../controllers/control/view.controller')
const {delSession, requireAuth, existAuth} = require('./../controllers/models/session.controller')

const router = Router()

router.get('/products', requireAuth, getViewProducts)

router.get('/product/:pid', requireAuth, getViewProduct)

router.get('/cart/:cid', requireAuth, getViewCart)

router.get('/login', existAuth, getLogin)

router.get('/register', existAuth, getRegister)

router.get('/error', getError)

router.get('/logout', delSession)

module.exports = router