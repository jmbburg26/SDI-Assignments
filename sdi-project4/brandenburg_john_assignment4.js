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

	//Check Phone Number
	var checkPhoneNumber = function (testNumber) {
        var phoneNumber = testNumber;
        var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (pattern.test(phoneNumber)) {
            var validPhoneNumber = phoneNumber.replace(pattern, "($1) $2-$3");
            return "This is a valid phone number!";
        } else {
            return "This is an invalid phone number!";
        };
    };

	//Check Email Pattern
	var checkEmail = function checkEmailPattern(emailToCheck) {
    	var emailAddress = emailToCheck
    	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
    		if (emailPattern.test(emailAddress)) {
        		return "This is a valid email address.";
   				 } else {
        		return "Not a valid email address."};
	};
	
	//Compare Date Function
	var getMyDate = function getDays(testDate) {
    	var myBirthday = testDate;
    		today = new Date(2012, 11, 13);
    	var find_time = 1000 * 60 * 60 * 24;
    		return (Math.ceil((today.getTime() - new Date(1986,7,15)) / (find_time)) + " days have gone by since " + testDate)
	};
	
	//My Decimal Function
	var moveDecimal = function fixNumber(myNumber) {
    	var number = myNumber
    	return number.toFixed(3);
	}

	return {
		"isStringUrl": 		isStringUrl,
		"convertToNumeric":	convertToNumeric,
		"checkPhoneNumber":	checkPhoneNumber,
		"checkEmail":		checkEmail,
		"getMyDate":		getMyDate,
		"moveDecimal":		moveDecimal
	};
};

var newLib = myCodeLibrary();


console.log("Is https://www.fullsail.edu an URL? " + newLib.isStringUrl("https://www.fullsail.edu"));
console.log(newLib.convertToNumeric("78"));
console.log("Is jmbburg26@gmail.com a valid email address? " + newLib.checkEmail("jmbburg26@gmail.com"));
console.log("Is 619-555-1234 a valid phone number? " + newLib.checkPhoneNumber("619-555-1234"));
console.log(newLib.getMyDate("August 15, 1986"));
console.log(newLib.moveDecimal(1234.56789));