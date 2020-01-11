const express = require('express')
const Themeparks = require('themeparks')
const PORT = process.env.PORT || 5000

const app = express()
const router = express.Router()

// Setup park objects & routes
const DisneylandPark = new Themeparks.Parks.DisneylandResortMagicKingdom
router.get('/dlr/facility', function(req, res) {
  DisneylandPark.GetFacilityData().then((resp) => {
    res.send(resp)
  }).catch((err) => {
    res.status(500).send('An error occurred')
  })
})
router.get('/dlr/wait-times', function(req, res) {
  DisneylandPark.GetWaitTimes().then((resp) => {
    res.send(resp)
  }).catch((err) => {
    res.status(500).send('An error occurred')
  })
})
router.get('/dlr/hours', function(req, res) {
  DisneylandPark.GetOpeningTimes().then((resp) => {
    res.send(resp)
  }).catch((err) => {
    res.status(500).send('An error occurred')
  })
})

const DisneylandDCA = new Themeparks.Parks.DisneylandResortCaliforniaAdventure
router.get('/dca/facility', function(req, res) {
  DisneylandDCA.GetFacilityData().then((resp) => {
    res.send(resp)
  }).catch((err) => {
    res.status(500).send('An error occurred')
  })
})
router.get('/dca/wait-times', function(req, res) {
  DisneylandDCA.GetWaitTimes().then((resp) => {
    res.send(resp)
  }).catch((err) => {
    res.status(500).send('An error occurred')
  })
})
router.get('/dca/hours', function(req, res) {
  DisneylandDCA.GetOpeningTimes().then((resp) => {
    res.send(resp)
  }).catch((err) => {
    res.status(500).send('An error occurred')
  })
})

// Listen for traffic
app.use('/', router)
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
