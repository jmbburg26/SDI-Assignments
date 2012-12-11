//alert("JavaScript works!");

/* 	John Brandenburg
	SDI 1212
	Project 4
*/

//My Library

var myCodeLibrary = function(){
	
	//Is String a URL?
	
	var isStringUrl = function(val){
		if (val === "http:","https:"){
			return true;
		} else {
			return false;
		}
	};
	
	//Convert a string to a number	
	var convertToNumeric = function(val){
		stringToNumber = parseInt(val);
		return stringToNumber;
		}
	//Arrays


	return {
		"isStringUrl": 		isStringUrl,
		"convertToNumeric":	convertToNumeric,
	};
};

var newLib = myCodeLibrary();

console.log("Is https://www.fullsail.edu an URL? " + newLib.isStringUrl("https://www.fullsail.edu"));
console.log(newLib.convertToNumeric("365"));