var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var BeamBreak = require('../models/beamBreak.js');

//and this is where we will issue a new beambreak / put it in the DB
//I'm fairly certain.
//
router.post('/', function(req, res) {
	//makes a new beambreak (an instance of our schema)
	//which defines the time itself.
	//so we just make a new one and save it.
	var beamBreak = new BeamBreak();
	beamBreak.save(function(err) {

		if (err) {
			res.send(err);
		}
		
		res.send("Beam break recorded");
		
	});
	
});
i
//so this is where the main page will go to request data correct?
//do we need to give him the data arra
//and this is where we will issue a new beambreak / put it in the DB
//I'm fairly certain.
//
router.get('/', function(req, res) {
	
	BeamBreak.find(function(err, beamBreaks) {
	
		if (err) {
			
			res.send(err);
			
		} else {
			
			res.json(beamBreaks);
		}
		
	});
	
});


module.exports = router;


