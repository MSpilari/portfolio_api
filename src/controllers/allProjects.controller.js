const project = require('../models/projectModel')

const findAllProjects = async (req, res) => {
    const results = await project.find({})
    return res.json(results)
}

module.exports = {
    findAllProjects
}