var mongoose = require('mongoose')
const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/greetedNames";

console.log(mongoURL);

mongoose.connect(mongoURL, {
  useMongoClient: true
});

mongoose.connection.on("error", function(err){
  console.log(err);
});

exports.PeopleGreeted = mongoose.model('peoplegreeteds', {
  name: String,
  counter: Number
});
