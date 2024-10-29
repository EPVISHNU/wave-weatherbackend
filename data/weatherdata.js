const sensors = ['sensor1', 'sensor2', 'sensor3'];
let sensorData = {
  sensor1: { current: {}, history: [] },
  sensor2: { current: {}, history: [] },
  sensor3: { current: {}, history: [] },
};


function generateRandomData() {
  return {
    temperature: (Math.random() * 35).toFixed(2),
    humidity: (Math.random() * 100).toFixed(2),
    pressure: (Math.random() * 30 + 970).toFixed(2),
    timestamp: new Date(),
  };
}


function startSimulation() {
  setInterval(() => {
    sensors.forEach(sensor => {
      const data = generateRandomData();
      sensorData[sensor].current = data;
      sensorData[sensor].history.push(data);
      if (sensorData[sensor].history.length > 100) sensorData[sensor].history.shift(); 
      console.log(`Generated data for ${sensor}:`, data);
       
    });
  }, 30000);
}

function getCurrentWeather() {
  return sensors.map(sensor => ({ sensorId: sensor, ...sensorData[sensor].current }));
}

function getHistoricalData(sensorId) {
  return sensorData[sensorId]?.history || null;
}

function addSensorData(sensorId, data) {
  if (!sensorData[sensorId]) return;
  sensorData[sensorId].current = data;
  sensorData[sensorId].history.push(data);
}

module.exports = { startSimulation, getCurrentWeather, getHistoricalData, addSensorData };
