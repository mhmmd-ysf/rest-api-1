const { User } = require('../models')
const { hash, compare } = require('../helpers/bcryptjs')
const { sign } = require('../helpers/jwt')

class ControllerUser {
  static create(req, res, next) {
    console.log("masuk")
    User.create({
      username: req.body.username,
      password: hash(req.body.password),
      role: req.body.role
    })
      .then(user => {
        res.status(201).json(user)
      })
      .catch(err => {
        next(err)
      })
  }
  static findAll(req, res, next) {
    User.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => next(err))
  }
  static findOne(req, res, next) {
    User.findOne({_id: req.params.id})
      .then(user => {
        res.status(200).json(user)
      })
      .catch(err => {next(err)})
  }
  static update(req, res, next) {
    User.update({_id: req.params.id}, req.body, { new: true })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => next(err))
  }
  static delete(req, res, next) {
    User.destroy({
      where: {
        id: Number(req.params.id)
      }
    })
      .then(user => {
        const response = {
          message: 'Successfully deleted user.',
          id: req.params.id
        }
        res.status(200).json(response)
      })
      .catch(err => {next(err)})
  }
  static login(req, res, next) {
    User.findOne({
      where: {
        username: req.body.username
      }
    })
      .then(({dataValues}) => {
        let user = dataValues
        if (!user) {
          res.status(401).json({ message: 'Username tidak ada.' })
        } else {
          if (!compare(req.body.password, user.password)) {
            res.status(401).json({ message: 'Password salah.' })
          } else {
            let token = sign({
              id: user.id,
              username: user.username,
              role: user.role
            }, process.env.SECRET)
            // req.headers.token = token
            res.status(200).json({ token })
          }
        }
      })
      .catch(err => next(err))
  }
}

module.exports = ControllerUser