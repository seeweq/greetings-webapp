var express = require('express')
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express()
var counter = 0;
 var mongoose = require('mongoose')
 var Schema = mongoose.Schema
 var CountNames = require('./mongo')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/', function(req, res) {
  console.log(process.env.MY_NAME)
  res.render('index')
});

  app.post('/', function(req ,res){
  var message = '';
  var language = req.body.language;
  var nameGreeted = req.body.firstName;

  if(language === 'english'){
    message = 'Hello, ' + nameGreeted;
    counter++;
    CountNames.create({
      name : nameGreeted,
      counter : counter
    });
  }
  else if (language === 'afrikaans') {
  message = 'Hallo, ' + nameGreeted ;
  counter++;
  CountNames.create({
    name : nameGreeted,
    counter : counter
  });
  }
  else if (language ==='isiXhosa'){
  message = 'Molo, ' + nameGreeted ;
  counter++;
  CountNames.create({
    name : nameGreeted,
    counter : counter
  });
   }

   res.render('index',{
     outputMessage : message,
     outputCounter : counter
   })

 });

var port = 3000;
 app.listen(process.env.PORT || port , function() {
   console.log('app is now listening :'+ port);
 });
