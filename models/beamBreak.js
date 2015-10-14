var mongoose = require('mongoose');

var BeamBreak = new mongoose.Schema({
	//I was thinking when we define this we could have it be put in a group.
	//like the 10:00 group.
	//so when we output the data at the end, and we're packaging it up all nice
	//we can just say amountOf(beambreaks.find({"date"=whatever,group = "10"}));
	//this way we can just count them, and send just the hour and the corresponding #
	//not sure how we're going to parse it.
	//I'm assuing we can take just the date out of the date we put in below
	timeStamp: { type: Date, default: Date.now }
	
});

module.exports = mongoose.model("BeamBreak", BeamBreak);
