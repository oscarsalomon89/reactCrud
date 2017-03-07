var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('todo'));
app.use(express.static(__dirname + '/public'));

app.get('/api/todos', function(req, res) {
  fs.readFile('db/todos.json', function(err, data) {
    if (err) throw err;
    try {
      return res.json(JSON.parse(data));
    }
    catch (err) {
      console.log(err);
      return res.json([]);
    }
  });
});

app.get('/', function(req, res) {
  res.sendFile(__dirname +'/public/index.html');
});

app.post('/api/todos', function(req, res) {
  fs.readFile('db/todos.json', function(err, data) {
    if (err) throw err;
    try {
      var mesaggeList = JSON.parse(data);
      var message = {
        id: mesaggeList[mesaggeList.length - 1].id + 1,
        username: req.body.username,
        body: req.body.body,
        time: req.body.time
      }
      mesaggeList.push(message);

      fs.writeFile('db/todos.json', JSON.stringify(mesaggeList), function(err) {
        if (err) throw err;
      });

      return res.json(mesaggeList);
    }
    catch (err) {
      console.log(err);
      return res.json([]);
    }
  });
});

app.post('/api/todos/done', function(req, res) {
  fs.readFile('db/todos.json', function(err, data) {
    if (err) throw err;
    try {
      var todoList = JSON.parse(data);
      var todoId = parseInt(req.body.todoId);
      todoList = todoList.map(function(todo) {
        if (todoId === todo.id) todo.done = true;
        return todo;
      });

      fs.writeFile('todos.json', JSON.stringify(todoList), function(err) {
        if (err) throw err;
      });

      return res.json(todoList);
    }
    catch (err) {
      console.log(err);
      return res.json([]);
    }
  });
});

app.listen(3000, function() {
  console.log('Running on 127.0.0.1:3000...');
});