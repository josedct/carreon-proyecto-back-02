const {Router} = require('express')
const {getViewProducts, getViewProduct, getViewCart} = require('./../controllers/control/view.controller')

const router = Router()

router.get('/products', getViewProducts)

router.get('/product/:pid',getViewProduct)

router.get('/cart/:cid',getViewCart)

module.exports = router