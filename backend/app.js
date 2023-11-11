const express = require('express')
const cors = require('cors');
const app = express()
require('dotenv').config()
const { db } = require('./db/db');
const{readdirSync} = require('fs')
const path = require('path');
const PORT = process.env.PORT


//middlewares

app.use(express.json())
app.use(cors())

//routes
const routesPath = path.join(__dirname, 'routes');

readdirSync(routesPath).forEach((route) => {
    const routePath = path.join(routesPath, route);
    app.use('/api/v1', require(routePath));
});
//readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


app.use('/api/v1', require('./routes/transactions'));
app.get('/', (req, res)=>{
    res.send('Hello World')
})


const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()

