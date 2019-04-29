const route = require('express').Router()
const todo = require('./todo')
const { ControllerUser, ControllerTodo } = require('../controllers')
const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize')

route.get('/', (req, res) => {
  res.status(200).json({ page: 'Home' })
})
route.get('/users', ControllerUser.findAll)
route.delete('/users/:id', ControllerUser.delete)
route.use('/todos', authenticate, todo)
route.post('/register', ControllerUser.create)
route.post('/login', ControllerUser.login)

route.use('/*', (req, res) => { res.status(200).json({ error: 'Page not found. :(' }) })

module.exports = route