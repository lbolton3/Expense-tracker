const express = require('express')
const cors = require('cors');
const application = express()
require('dotenv').config()
const { database } = require('./database/database');
const{readdirSync} = require('fs')
const path = require('path');
const PORT = process.env.PORT


//middlewares 

application.use(express.json())
application.use(cors())

//routes
const routesPath = path.join(__dirname, 'routes');

readdirSync(routesPath).forEach((route) => {
    const routePath = path.join(routesPath, route);
    application.use('/api/v1', require(routePath));
});
//readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


application.use('/api/v1', require('./routes/transactions'));
application.get('/', (req, res)=>{
    res.send('Hello World')
})


const server = () => {
    database()
    application.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()

