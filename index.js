var express = require('express')
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express()
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var models = require('./model')

function storeName(name, cb) {
  models.PeopleGreeted.findOne({
      name: name
    },
    function(err, greetingPerson) {
      if (err) {
        return err;
      }
      if (!greetingPerson) {
        var newNamesGreeted = new models.PeopleGreeted({
          name: name,
          counter: 1
        })
        newNamesGreeted.save(cb);
      } else if (greetingPerson) {
      greetingPerson.counter++;
      greetingPerson.save(cb);
      }
    })
};


app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/', function(req, res) {
  var newGreet = req.body.firstName
  res.render('index')
})




app.post('/', function(req, res) {

  var message = '';
  var newGreet = req.body.firstName;
  var language = req.body.language;



  if (language === 'english') {
    message = 'Hello, ' + newGreet;

  } else if (language === 'afrikaans') {
    message = 'Hallo, ' + newGreet;

  } else if (language === 'isiXhosa') {
    message = 'Molo, ' + newGreet;
  }

  storeName(newGreet, function() {

    models.PeopleGreeted.count({}, function(err, counter) {
      if (err) {
        return err;
      } else {
        res.render('index', {
          outputMessage: message,
          outputCounter: counter
        })

      }
    });
  });
});
app.post('/reset', function(req, res) {
  models.PeopleGreeted.remove({}, function(err, remove) {
    if (err) {
      return err;
    }
    res.render('index')

  });
});
app.get('/greeted', function(req, res){
  models.PeopleGreeted.find({}, function(err,name){
    if(err){
      return err;
    }
  res.render('index', {name})
})
})
var port = 3000;
app.listen(process.env.PORT || port, function() {
  console.log('app is now listening :' + port);
});

 //const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/index";
 //mongoose.connect(mongoURL);
