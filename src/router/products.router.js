const {Router} = require('express')

const router = Router()

router.get('/', getProducts)

router.get('/:pid',getProduct)

router.post('/',addProduct)

router.put('/:pid',updProduct)

router.delete('/:pid',delProduct)

module.exports = router