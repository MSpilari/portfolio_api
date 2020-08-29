const project = require('../models/projectModel')

const deleteOne = async(req, res) => {
    const { name } = req.params
    
    await project.deleteOne({
        name
    })
    
    res.json({message: 'Project Deleted'})
}

const deleteAll = async(req, res) => {
    await project.deleteMany({})
    
    res.json({message: 'Database Cleared'})
}

module.exports = {
    deleteOne,
    deleteAll
}