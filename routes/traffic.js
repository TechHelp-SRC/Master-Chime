var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var BeamBreak = require('../models/beamBreak.js');

router.post('/', function(req, res) {
	
	var beamBreak = new BeamBreak();
		
	beamBreak.save(function(err) {

		if (err) {
			res.send(err);
		}
		
		res.send("Beam break recorded");
		
	});
	
});

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


