const express = require ('express')

const cors = require ('cors')

const routes = require('./Routes/router')

const {startSimulation}= require('./data/weatherdata')

const wserver = express()

wserver.use(express.json())
wserver.use (cors())
wserver.use('/api/weather',routes)


const PORT = 5000;

wserver.listen(PORT,()=>{
    console.log("Listening on port" + PORT)
startSimulation();
}
);
 