const userModel = require('./../dao/models/user.model')

const getUser = async (req, res) => {
    const { userEmail, userPassword } = req.body
    let user

    try {
        user = await userModel.findOne({email: userEmail, password: userPassword}).lean().exec()
    } catch (error) {
        return res.render('login')
    }
    
    if(!user) {
        return res.render('login')
    }

    const {email, role} = user
    
    req.session.user = {email, role}
    res.redirect('/products')
}

const addUser = async (req, res) => {
    
}