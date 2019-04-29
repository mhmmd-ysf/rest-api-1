function authorize(req, res, next) {
  try {
    if(req.auth.role !== 'admin') {
      if(req.params.id == req.auth.id) {
        next()
      } else {
        res.status(401).json({message: 'Harus Admin/user sendiri.'})
      }
    } else {
      next()
    }
  } catch {
    res.status(401).json({message: 'Harus authorized user'})
  }
}

module.exports = authorize