const express = require('express')
const path = require('path')
const handlebars = require('express-handlebars')

const server = express()

server.use(express.json())
server.use(express.urlencoded({extends: true}))
server.use(express.static(path.join(__dirname,'public')))
server.engine('handlebars', handlebars.engine())
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'handlebars')

server.use('/api/products',productRouter)
server.use('/api/carts',cartRouter)

server.listen(8080, () => console.log('Server Up'))