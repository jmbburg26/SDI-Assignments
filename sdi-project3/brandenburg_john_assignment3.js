//alert("JavaScript works!");var soldierName = "John";

//My Global Variables
var	basicTraining = {
		stationName:	"Fort Knox",
		phases:			[ "Reception", "Red Phase", "Green Phase", "Blue Phase", "Gold Phase" ],
		activities: 	[ "PT", "Shooting Range", "Rappelling Wall", "Bradley Driving Course", "20K Road March", "Graduation" ],
		barricksName:	"Disney",
		lotOfFun:		true,
		getlocation:	function (location) {},
		timeAtBasic:	function () {}
};
var soldierName = "PFC Brandenburg";
var	bestJobEver = "Cavalry Scout";
var	goArmy = "Army";


//Main Code
var trainingBase = basicTraining.stationName;
console.log("After spending all that time at " + trainingBase + ", " + soldierName + " is gonna tell us his favorite things about training.");

var favoriteActivities = basicTraining.activities;
console.log("The activities I enjoyed the most was " + favoriteActivities + ".");