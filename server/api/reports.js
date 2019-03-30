const router = require('express').Router()
const {Report} = require('../db/models')
module.exports = router

//get all reports, full route /api/reports
router.get('/', async (req, res, next) => {
  try {
    const report = await Report.findAll()
    res.send(report)
  } catch (error) {
    next(error)
  }
})

// Get all Vessel report, full route /api/reports/vessels/#

router.get('/vessels/:vesselID/reports', async (req, res, next) => {
  try {
    const allVesselReport = await Report.findAll({
      where: {
        vesselID: req.params.vesselID
      },
    })
    res.send(allVesselReport)
  } catch (error) {
    next(error)
  }
})
