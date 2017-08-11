var mongoose = require('mongoose')
const MongoURL = 'mongodb://Sivu:tshula17@ds149437.mlab.com:49437/greeting-webapp'
mongoose.connect(MongoURL, {
  useMongoClient: true
});

exports.PeopleGreeted = mongoose.model('peoplegreeteds', {
  name: String,
  counter: Number
});
