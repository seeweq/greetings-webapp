var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/index', {
  useMongoClient: true
});

exports.PeopleGreeted = mongoose.model('peoplegreeteds', {
  name: String,
  counter: Number
});
