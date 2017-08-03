var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/index', {
  useMongoClient: true
});

exports.peopleGreeted = mongoose.model('peopleGreeted', {
  name: String,
  counter: Number
});
