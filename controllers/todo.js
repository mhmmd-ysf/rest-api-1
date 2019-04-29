const { Todo } = require('../models')
const { hash, compare } = require('../helpers/bcryptjs')
const { sign } = require('../helpers/jwt')

class ControllerTodo {
  static getAll(req, res, next) {
    Todo.findAll({
      where: {
        userId: req.auth.id
      }
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => next(err))
  }
  static getOne(req, res, next) {
    Todo.findOne({ where: { id: Number(req.params.id) } })
      .then(todo => {
        if (todo.userId !== req.auth.id) {
          res.status(401).json({ message: 'Not Authorized.' })
        } else {
          res.status(200).json(todo)
        }
      })
      .catch(err => next(err))
  }
  static create(req, res, next) {
    Todo.create({
      title: req.body.title,
      description: req.body.description,
      userId: req.auth.id
    })
      .then(todo => {
        res.status(201).json(todo)
      })
      .catch(err => {
        next(err)
      })
  }
  static delete(req, res, next) {
    Todo.destroy({
      where: {
        id: Number(req.params.id)
      }
    })
      .then(data => {
        const response = {
          message: 'Successfully deleted user.',
          id: req.params.id
        }
        res.status(200).json(response)
      })
      .catch(err => { next(err) })
  }
  static updatePut(req, res, next) {
    Todo.update({
      title: req.body.title,
      description: req.body.description
    }, {
        where: {
          id: Number(req.params.id)
        },
        returning: true
      })
      .then(data => {
        res.status(200).json(data[1])
      })
      .catch(err => { next(err) })
  }
  static updatePatch(req, res, next) {
    let input = {}
    if (req.body.title) {
      input.title = req.body.title
    }
    if (req.body.description) {
      input.description = req.body.description
    }
    Todo.update({
      title: req.body.title,
      description: req.body.description
    }, {
        where: {
          id: Number(req.params.id)
        },
        returning: true
      })
      .then(data => {
        res.status(200).json(data[1])
      })
      .catch(err => { next(err) })
  }
}

module.exports = ControllerTodo