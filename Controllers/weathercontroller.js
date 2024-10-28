const {getCurrentWeather,getHistoricalData,addSensorData} = require('../data/weatherdata')

const getCurrent = (req, res) => {
    const data = getCurrentWeather();
    res.json(data);
  };
  
  const getHistory = (req, res) => {
    const { sensorId } = req.params;
    const data = getHistoricalData(sensorId);
    if (!data) return res.status(404).json({ message: 'Sensor not found' });
    res.json(data);
  };
  
  const postData = (req, res) => {
    const { sensorId, temperature, humidity, pressure } = req.body;
    addSensorData(sensorId, { temperature, humidity, pressure });
    res.status(201).json({ message: 'Data added successfully' });
  };
  
  module.exports = { getCurrent, getHistory, postData };