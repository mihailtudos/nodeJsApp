//get express 
const express = require('express');

//assign the app to use the API
const app = express();

//get / or home path
app.get('/', function(req, res){
    res.send('</h1>welcome</h1>');
});

//get the application to listen to port 3000
app.listen(3000);

