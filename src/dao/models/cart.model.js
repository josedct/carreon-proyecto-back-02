const mongoose = require('mongoose')

const cartCollection = 'carts'

const cartSchema = new mongoose.Schema({
    products: {
        type: [{
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products'
            },
            quantity: Number
        }],
        default: []
    }
})

cartSchema.pre('findOne', function () {
    this.populate('products.product')
}) 

const cartModel = mongoose.model(cartCollection,cartSchema)
module.exports = cartModel