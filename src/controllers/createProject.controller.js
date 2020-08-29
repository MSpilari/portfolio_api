const projectModel = require('../models/projectModel')

const createProject = async (req, res) => {
    const { thumbnail, name, description, href } = req.body
    
    const project = new projectModel({
        thumbnail,
        name,
        description,
        href,
        date: Date.now()
    })

    try{
        await project.save()
        return res.status(200).json({message: 'Project saved.'})
    }
    catch(err){
        return res.json({message: 'The project was not saved.'})
    }   
}

module.exports = {
    createProject
}

