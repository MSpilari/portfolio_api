const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    
    const token = await req.header('auth-token')
    if(!token) return res.status(401).json({message: 'Access Denied !'})

    const verify = jwt.verify(token, process.env.SECRET_TOKEN)
    if(!verify) return res.status(401).json({message: 'Your token is no longer valid.'})

    return next()
}

module.exports = auth