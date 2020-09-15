const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const adminModel =  require('../models/adminModel')

const createAdmin = async(req, res) => {
    const { adminName, password } = req.body

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    const admin = new adminModel({
        adminName,
        password:hashedPassword
    })

    try{
        await admin.save()
        return res.status(200).json({admin})
    }catch(err){
        return res.status(401).json({err})
    }
    
}

const findAdmin = async (req, res) => {
    const { name, password } = req.body

    const adminExists = await adminModel.findOne({ adminName: name })
    if(!adminExists) return res.status(401).json({message: 'Admin not found'})
    
    const validPassword =  await bcrypt.compare(password, adminExists.password)
    if(!validPassword) return res.status(401).json({message: 'Password does not match'})
    
    const token =  jwt.sign({_id: adminExists._id}, process.env.SECRET_TOKEN)

    return res.header('auth-token', token).json({'auth-token': token }).status(200)
}

module.exports = { createAdmin, findAdmin }