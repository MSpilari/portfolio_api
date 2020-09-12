const routes = require('express').Router()

const auth = require('./utils/auth')
const createController = require('./controllers/createProject.controller')
const adminController = require('./controllers/createAdmin.controller')
const findController = require('./controllers/allProjects.controller')
const deleteController = require('./controllers/deleteProject.controller')


routes.get('/', findController.findAllProjects)

routes.post('/newProject', auth, createController.createProject)
routes.post('/newAdmin', adminController.createAdmin)
routes.post('/login', adminController.findAdmin)

routes.delete('/delete/:name', auth, deleteController.deleteOne)
routes.delete('/delete', auth, deleteController.deleteAll)

module.exports = routes