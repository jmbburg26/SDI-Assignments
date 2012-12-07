//alert("JavaScript works!");var soldierName = "John";

//My Global Variables
var soldierName = "PFC Brandenburg";
var	bestJobEver = "Cavalry Scout";
var	goArmy = "Army";

//My objects
var	basicTraining = {
		stationName:	"Fort Knox",
		phases:			[ "Reception", "Red Phase", "Green Phase", "Blue Phase", "Gold Phase" ],
		activities: 	[ "PT Test", "Shooting Range", "Rappelling Wall", "Bradley Driving Course", "20K Road March", "Graduation" ],
		barricksName:	"Disney",
		lotOfFun:		true,
		getlocation:	function (location) {},
		timeAtBasic:	function () {}
};

var trainingBase = basicTraining.stationName;
var favoriteActivities = basicTraining.activities;

//My Boolean function
var apftResults = function(totalScore){
	if (totalScore >= 180) {
		return "I successfully passed my APFT";
	} else {
		return "YOU NEED TO DO MORE PT!"};
};
var apftTestScore = apftResults(220);

//My Number Function
var roadMarch = function(totalDistance){
var distanceConversion = 
	totalDistance * .6;
		return distanceConversion;
};
var roadMarchDistance = roadMarch(59);

//Main Code

console.log("After spending all that time at " + trainingBase + ", " + soldierName + " is going to tell us his favorite things about training.");
console.log("The activities he enjoyed the most were " + favoriteActivities + ".");
console.log(soldierName + "'s least favorite was the " + favoriteActivities[0] + ".");
console.log("With a score of 220, " + apftTestScore + "!");
console.log("While training to be a " + bestJobEver + ", " + soldierName + " did a lot of Road Marches.");
console.log("He did a total of 7 marches.");
console.log("The total distance of the marches was " + roadMarchDistance + " miles.");
console.log(roadMarchDistance);

var goingHome = function(weeksOfBasic){
 	while (weeksOfBasic > 0){
		weeksOfBasic--;
		console.log(weeksOfBasic + " more weeks until I go home!");
		}
};
var timeLeft = goingHome(20);