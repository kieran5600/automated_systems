'use strict'

// server.js
// load the things we need
var express = require('express');
var app = express();

//For css. And pictures, right?
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

//This connects to our router, that is for reason important
require('./routes/main')(app);

//This connects our views folder
app.set('views',__dirname + '/views');

// use res.render to load up an ejs view file this is /routes
// process.env.PORT is needed for heroku
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", 
  			  this.address().port, app.settings.env);
});


