//get express 
const express = require('express');

//assign the app to use the API
const app = express();

//set the app to use views folder for more organised app
app.set('views', 'views')

//setting the app to use the ejs as the view engine
//needs to be installed via npm
app.set('view engine', 'ejs')

//get / or home path
app.get('/', function(req, res){
    res.render('home-guest')
});

//get the application to listen to port 3000
app.listen(3000);

