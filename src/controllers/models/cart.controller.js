const cartModel = require('./../../dao/models/cart.model')
const productModel =require('./../../dao/models/product.model')

// GET /api/carts/:cid 
const getCart = async (req, res) => {
    const {cid} = req.params
    const info = {}

    if(cid === undefined){
        info.status = "error"
        info.payload = {}
        info.message = "the cart id is not a correct number"
        return res.json(info)
    }

    try {
        //populate('products.product')
        const cart = await cartModel.findById(cid).lean().exec()
        info.status = "success"
        info.payload = cart
        info.message = "ok"
    } catch (error) {
        info.status = "error"
        info.payload = {}
        info.message = "cart id no found"
    }

    return res.json(info)
}

//POST /api/carts/ 
const addCart = async (req, res) => {
    const info = {}

    try {
        const result = await cartModel.create({})
        info.status = 'success'
        info.message = 'cart added successfully.'
        info.id = result._id
    } catch (error) {
        info.status = 'error'
        info.message = 'the cart could not be added.'
        info.id = 0
    }
    
    return res.json(info)
}

//POST /api/carts/:cid/product/:pid
const addProductToCart = async (req, res) => {
    const {cid, pid} = req.params
    const info = {}

    if(cid === undefined || pid === undefined){
        info.status = "error"
        info.message = "the cart id or product id is not a correct number."
        return res.json(info)
    }

    //exista el producto
    try {
        if(await productModel.exists({_id:pid}) === null){
            info.status = "error"
            info.message = "the product id no exists."
            return res.json(info)
        }
    } catch (error) {
        info.status = "error"
        info.message = "could not be consulted product."
        return res.json(info)
    }

    //exita el carrito
    try {
        if(await cartModel.exists({_id:cid}) === null){
            info.status = "error"
            info.message = "the cart id no exists."
            return res.json(info)
        }
    } catch (error) {
        info.status = "error"
        info.message = "could not be consulted cart."
        return res.json(info)
    }

    //agregar o actualizar el producto en el carrito

    console.log(cid)
    console.log(pid)
    const result = await cartModel.updateOne({$and: [{_id: cid},{"products.product": pid}] },{$inc: { "products.$.quantity" : 1 }})
    const result2 = await cartModel.findOne({_id: cid,"products.product": pid}).lean().exec()

    console.log(result)
    console.log(result2)

    return res.json(info)
}

const name = async (req, res) => {
    return
}

module.exports = {getCart, addCart, addProductToCart}