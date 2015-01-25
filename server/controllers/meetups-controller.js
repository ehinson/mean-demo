var Meetup = require('../models/Meetup');

module.exports.create = function(req, res) {
    var meetup = new Meetup(req.body);
    meetup.save(function(err, results) {
      res.json(results);
    });
 }

 module.exports.list = function(req, res) {
  Meetup.find({}, function(err, results){
    res.json(results);
  }); 
 }