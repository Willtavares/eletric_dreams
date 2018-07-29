var express = require('express');
var api = express();
var bodyParser = require('body-parser');
api.use(bodyParser.json());;

api.use(function (req, res, next) {
    
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });

// Configuring the database
const dbConfig = require('./api/config/mongodb.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, { useNewUrlParser: true })
.then(() => {
    console.log("Sucesso ao se conectar ao MongoDB.");    
}).catch(err => {
    console.log('Não foi possivel se conectar ao MongoDB.');
    process.exit();
});

require('./api/routes/postsRoute.js')(api);
require('./api/routes/feedsRoute.js')(api);

// Create a Server
var server = api.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://localhost", host, port)
})
