var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/index');

var CountNames = mongoose.model('CountNames', { name: String, counter: Number });


module.exports = CountNames
