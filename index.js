var bodyParser = require('body-parser');
var express = require('express');
var Message = require('./models/message');

var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('todo'));
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/reactCrud');

app.get('/', function(req, res) {
  res.sendFile(__dirname +'/public/index.html');
});

//Trae todos los mensajes
app.get('/api/todos', function(req, res) {
  Message.find()
        .sort({time: 'asc'})
        .exec(function(error,messages){
          if(error){
              console.log('error');
           }else{
               return res.json(messages);
           }
        });
});

//Guarda en la base de datos
app.post('/api/todos', function(req, res) {
    Message.count({},function(err,cantidad) {
      
    //Parámetros para la inserción de datos
    var valorId = (cantidad + 1);
    var parametros = {
       id: valorId,
       username: req.body.username,
       body: req.body.body,
       time: new Date()
    };

    //Realizo la inserción de datos
    new Message(parametros).save(function(error, mensaje){
       if (error) {
          return console.log('error');
       } else {
          return res.json(mensaje);
       }
    });
  })
});


app.listen(3000, function() {
  console.log('Running on 127.0.0.1:3000...');
});