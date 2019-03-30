const router = require('express').Router()
const {Report} = require('../db/models')
module.exports = router

//get all vessels, full route /api/vessels
router.get('/', async (req, res, next) => {
  try {
    const vessels = await Report.findAll()
    res.send(vessels)
  } catch (error) {
    next(error)
  }
})

// Get all reports, full route /api/vessels/#
router.get('/:vesselID/reports', async (req, res, next) => {
  try {
    const singleVesselReports = await Report.findAll({
      where: {
        vesselID: req.params.vesselID
      },
    })
    res.send(singleVesselReports)
  } catch (error) {
    next(error)
  }
})

//single report from vessel, full route /api/vessel/vessel#/report#
router.get('/:vesselID/reports/:reportID', async (req, res, next) => {
  try {
    const singleVesselReports = await Report.findAll({
      where: {
        reportID: req.params.reportID
      },
    })
    res.send(singleVesselReports)
  } catch (error) {
    next(error)
  }
})
