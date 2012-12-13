//alert("JavaScript works!");

/* 	John Brandenburg
	SDI 1212
	Project 4
*/

//My Library

var myCodeLibrary = function(){
//Strings	
	//Is String a URL?
	
	var isStringUrl = function(val){
		if (val === "http:","https:"){
			return "This is a valid URL";
		} else {
			return "This is NOT a valid URL";
		}
	};

	//Convert a string to a number	
	var convertToNumeric = function(val){
		stringToNumber = parseInt(val);
			return stringToNumber;
		};

	var findPhoneNumber = function(){
		pattern = Pattern.compile("\\d{3}-\\d{3}-\\d{4}");
		matcher = pattern.matcher(str);
			if (matcher.find()) {
    		System.out.println(matcher.group(0))
    			return true;
    		} else {return false;
    	}
	};
	
	function checkEmailPattern(emailToCheck) {
    	var emailAddress = emailToCheck
    	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
    		if (emailPattern.test(emailAddress)) {
        		return "This is a valid email address.";
   				 } else {
        		return "Not a valid email address."};
	};
	//Arrays


	return {
		"isStringUrl": 		isStringUrl,
		"convertToNumeric":	convertToNumeric,
		"checkEmailPattern":checkEmailPattern,
	};
};

var newLib = myCodeLibrary();


console.log("Is https://www.fullsail.edu an URL? " + newLib.isStringUrl("https://www.fullsail.edu"));
console.log(newLib.convertToNumeric("78"));
console.log("Is jmbburg26@gmail.com a valid email address? " + newLib.checkEmailPattern("jmbburg26@gmail.com"));