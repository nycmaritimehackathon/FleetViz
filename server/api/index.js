const router = require('express').Router()
module.exports = router

router.use('/vessels', require('./vessels'))
router.use('/reports', require('./reports'))
// router.use('/voyages', require('./voyages'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
