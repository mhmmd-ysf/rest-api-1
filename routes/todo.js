const route = require('express').Router()
const { ControllerTodo } = require('../controllers')
const authorize = require('../middlewares/authorize')
const authenticate = require('../middlewares/authenticate')
const isUser = require('../middlewares/isUser')

route.get('/', authenticate, ControllerTodo.getAll)
route.post('/', authenticate, ControllerTodo.create)
route.get('/:id', isUser, ControllerTodo.getOne)
route.put('/:id', isUser, ControllerTodo.updatePut)
route.patch('/:id', isUser, ControllerTodo.updatePatch)
// route.use(authorize)
route.delete('/:id', isUser, ControllerTodo.delete)


module.exports = route