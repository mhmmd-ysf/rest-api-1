function authorize(req, res, next) {
  if(req.auth.role !== 'admin') {
    res.status(401).json({message: 'Unauthorized'})
  } else {
    next()
  }
}

module.exports = authorize