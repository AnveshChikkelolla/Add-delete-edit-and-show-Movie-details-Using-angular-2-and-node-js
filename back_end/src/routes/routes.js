var express = require('express');
var router = express.Router();
var Moviee = require('../model/model.js');
router.get('/', function(req, res){
    Moviee.getMoviees(function(err,employees){
         if(err) throw err;
         res.json(employees);
     });

 })
router.post('/', function(req, res){
    var newMoviee = {
        name: req.body.name,
        releaseDate : req.body.releaseDate,
        rating: req.body.rating,
        language: req.body.language
    }
    Moviee.addMoviee(newMoviee,function(err,moviee){
         if(err) throw err;
         res.json(moviee);
     });
 })
 router.put('/:_id', function(req, res){
     var update = {
        name: req.body.name,
        releaseDate : req.body.releaseDate,
        rating : req.body.rating,
        language: req.body.language
    }
     Moviee.updateMoviee(req.params._id , update, function(err,moviee){
         if(err) throw err;
         res.json(moviee);
     });
 })
 router.delete('/:_id', function(req, res){
     
    Moviee.deleteMoviee(req.params._id ,  function(err,moviee){
         if(err) throw err;
         res.json(moviee);
     });
 })
 router.get('/:_id', function(req, res){
    
     Moviee.getMoviee(req.params._id , function(err,moviee){
         if(err) throw err;
         res.json(moviee);
     });
 })
module.exports = router;