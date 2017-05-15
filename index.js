var express = require('express')
var app = express()
var server = app.listen(3000);
var namesGreeted = [];
app.get('/greetings/:name', function(req , res){
  res.send('Hello, ' + req.params.name);
  namesGreeted.push(req.params.name);
});
app.get('/greeted/', function(req , res){
res.send(namesGreeted);
})

app.get('/counter/:user_name',function(req , res){
var users = req.params.user_name;
var map ={}
for(var i=0; i<namesGreeted.length; i++){
  var countNamesGreeted = namesGreeted[i];
  map[countNamesGreeted]=map[countNamesGreeted] ?
  map[countNamesGreeted]+1:1;

}
res.send('Hello, ' + users + ' has been greeted ' +   map[countNamesGreeted] + ' times' );
});
