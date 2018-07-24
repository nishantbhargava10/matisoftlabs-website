const express  = require('express')
const path = require('path')
const http = require('http')
const app = express();
const server = http.Server(app)

app.use('/', express.static(__dirname + "/public"));

server.listen(2323, () => {
    console.log("Server started at http://localhost:2323")
})