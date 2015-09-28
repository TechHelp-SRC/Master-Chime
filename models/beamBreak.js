var mongoose = require('mongoose');

var BeamBreak = new mongoose.Schema({
	
	timeStamp: { type: Date, default: Date.now }
	
});

module.exports = mongoose.model("BeamBreak", BeamBreak);
