const route = require('express').Router()
const { ControllerTodo } = require('../controllers')
const authorize = require('../middlewares/authorize')
const isUser = require('../middlewares/isUser')

route.get('/:id', ControllerTodo.getOne)
route.put('/:id', isUser, ControllerTodo.updatePut)
route.patch('/:id', isUser, ControllerTodo.updatePatch)
route.post('/', ControllerTodo.create)
// route.use(authorize)
route.get('/', ControllerTodo.getAll)
route.delete('/:id', isUser, ControllerTodo.delete)


module.exports = route