var friends = require("../data/friends.js");
module.exports = function(app){
  app.get("/api/friends", function(req,res) {
		res.json(friends);
	});
	app.post("/api/friends", function(req,res) {
		var newResults = (req.body['scores']).map(Number); 
		var totalDifference = 100;
		var friendIndex; 
		for (var i = 0; i <friends.length; i++){
			var firendResults = friends[i]['scores'];

			var tempDifference = 0;
			for(var j=0; j< newResults.length; j++){
				tempDifference += Math.abs(newResults[j]-firendResults[j]);
			}
			if (tempDifference < totalDifference) {
				totalDifference = tempDifference;
				friendIndex = i; 
			}
		}
		res.json(friends[friendIndex]);
		friends.push(req.body); 
	}); 
}; 