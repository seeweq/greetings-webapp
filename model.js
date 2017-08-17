var mongoose = require('mongoose')
const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/greetedNames";
mongoose.connect(mongoURL, {
  useMongoClient: true
});

exports.PeopleGreeted = mongoose.model('peoplegreeteds', {
  name: String,
  counter: Number
});
