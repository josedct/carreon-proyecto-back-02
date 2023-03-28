
const getViewProducts = async (req, res) => {

    const url = req.originalUrl
    const urlQuery = url.replace('/products','/api/products')
    const protocol = req.protocol
    const host = req.header('host')

    try {
        const response = await fetch(`${protocol}://${host}${urlQuery}`)
        const data = await response.json()
        return res.json(data)
    } catch (error) {
        products = {
            status: "error",
            payload: [],
            totalPages : 0,
            prevPage: 0,
            nextPage: 0,
            page: 0,
            hasPrevPage: false,
            hasNextPage: false,
            prevLink: '',
            nextLink: ''
        }
        return res.json(data)    
    }
    
}

const getViewProduct = async (req, res) => {



    return
}

const getViewCart = async (req, res) => {
    return
}

module.exports = {getViewProducts, getViewProduct, getViewCart}