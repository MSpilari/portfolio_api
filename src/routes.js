const routes = require('express').Router()

const createController = require('./controllers/createProject.controller')
const findController = require('./controllers/allProjects.controller')
const deleteController = require('./controllers/deleteProject.controller')

const project = require('./models/projectModel')

routes.get('/', findController.findAllProjects)

routes.post('/newProject', createController.createProject)

routes.delete('/delete/:name', deleteController.deleteOne)
routes.delete('/delete', deleteController.deleteAll)

module.exports = routes