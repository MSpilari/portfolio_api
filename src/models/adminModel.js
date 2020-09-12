const mongoose = require('mongoose')

const adminSchema = require('../database/schemas/adminSchema') 

const admin = new mongoose.model('admin', adminSchema)

module.exports = admin