const express = require('express')
const path = require('path')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const productRouter = require('./router/products.router')
const cartRouter = require('./router/carts.router')
const viewsRouter = require('./router/views.router')

const server = express()
const uri = 'mongodb+srv://backecommerce:DRnbvYV25Av9YcXz@codercluster.gg34oks.mongodb.net/ecommerce?retryWrites=true&w=majority'

server.use(express.json())
server.use(express.urlencoded({extends: true}))
server.use(express.static(path.join(__dirname,'public')))
server.engine('handlebars', handlebars.engine())
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'handlebars')

server.use('/api/products',productRouter)
server.use('/api/carts',cartRouter)
server.use('/',viewsRouter)

mongoose.connect(uri)
    .then( () => {
        console.log('DB conectada...')
        server.listen(8080, () => console.log('Server Up'))
    })
    .catch(error => handleError(error));
