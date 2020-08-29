const mongoose = require('mongoose')

const projectSchema =  require('../database/schemas/projectSchema')

const project = new mongoose.model('project', projectSchema)

module.exports = project