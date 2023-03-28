const {Router} = require('express')
const {getViewProducts, getViewProduct, getViewCart, getLogin, getRegister} = require('./../controllers/control/view.controller')

const router = Router()

router.get('/products', getViewProducts)

router.get('/product/:pid',getViewProduct)

router.get('/cart/:cid',getViewCart)

router.get('/login',getLogin)

router.get('/register',getRegister)

module.exports = router