const { Router } = require('express')
const {getCart, addCart, addProductToCart} = require('./../controllers/models/cart.controller')

const router = Router()

router.get('/:cid', getCart)

router.post('/',addCart)

router.post('/:cid/product/:pid', addProductToCart)

module.exports = router