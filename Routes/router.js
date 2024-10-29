const express = require('express')

const router = express.Router()

const {getCurrent,getHistory,postData} = require('../Controllers/weathercontroller')

router.get('/api/weather/current', getCurrent);
router.get('/history/:sensorId', getHistory);
router.post('/data', postData);

module.exports =router