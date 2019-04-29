const jwt = require('jsonwebtoken')
function authenticate(req, res, next) {
  console.log({headers: req.headers})
  let { token } = req.headers
  if(token) {
    try {
      let decoded = jwt.verify(req.headers.token, process.env.SECRET_KEY)
      console.log(decoded)
      req.auth = decoded
      next()
    } catch {
      res.status(401).json({message: 'Authentication error.'})
    }
  } else {
    res.status(400).json({error: 'Invalid token provided.'})
  }
}

module.exports = authenticate