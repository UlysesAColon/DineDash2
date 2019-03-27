const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var path = require('path');

const items = require('./routes/api/items.js');
const app = express();

var http = require('http')
var server = http.Server(app);
app.use(express.static(path.join(__dirname, 'client','build')));
// Bodyparser Middleware
app.use(bodyParser.json());

//  DB Config
const db = require('./config/keys.js').mongoURI;


// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected....'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);



// app.use(express.static(path.join(__dirname, 'client/public')));

//if (process.env.NODE_ENV === 'production') {
//  app.use(express.static('client/public/'));
//  app.get('*', function(req, res){
//    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
//  });
//}

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname,'client','build','index.html'));
});

 //build
 app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname+'/client/public/index.html'));
 })

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

