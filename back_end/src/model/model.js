var mongoose = require('mongoose');
var empSchema = new mongoose.Schema({
    name: String,
    releaseDate : String,
    rating : String,
    language : String
})

var Moviee = module.exports = mongoose.model('Moviee', empSchema);

module.exports.getMoviees = function(callback){
    Moviee.find(callback);
}
module.exports.addMoviee = function(newEmployee, callback){
    Moviee.create(newEmployee, callback);
}
module.exports.updateMoviee = function(id, newEmployee, callback){
    Moviee.findByIdAndUpdate(id, newEmployee, callback);
}
module.exports.deleteMoviee = function(id, callback){
    Moviee.findByIdAndRemove(id, callback);
}
module.exports.getMoviee = function(id, callback){
    Moviee.findById(id, callback);
}
