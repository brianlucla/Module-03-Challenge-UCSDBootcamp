// Assignment code here

// Store arrays of different types of characters
var spChar = 
[',','.', ':','~','!','@','#','$','%','^','&','*','(',
')','_','-','`','=','+','{','}','{','}','\\', ';','|',
'/','<','>'];

// console.log(spChar.length);

var numChar = ['0','1','2','3','4','5','6','7','8','9'];

var alphaLowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','s','y','z'];

var alphaUpperChar= [];

for (let i = 0; i < alphaLowerChar.length; i++){
  alphaUpperChar.push(alphaLowerChar[i].toUpperCase()); 
}

// represents different character types --> 0 = special character, 1 = numbers, 2 = lowercase, 3 = uppercase
var randTypeArray = [0, 1, 2, 3];



// get the user's inputted password length
function getpwdLength() {
  var pwdLength = Number(prompt(
    "Please enter a password length of no smaller than 8 characters and no larger than 128."
  ));
  if (Number.isNaN(pwdLength)) {
    alert("Please enter a number.");
    return null;
  } else if (pwdLength < 8 || pwdLength > 128) {
    alert("Please enter a valid length.");
    return null;
  } else {
    return pwdLength;
  }
}

// get user preference for characters
function confirmSpChar() {
  var spCharBool = confirm("Would you like to include special characters?");
  return spCharBool;
}

function confirmNumChar() {
  var numCharBool = confirm("Would you like to include numeric characters?");
  return numCharBool;
}

function confirmLowerChar() {
  var lowerCharBool = confirm("Would you like to include lowercase alphabetic characters?");
  return lowerCharBool;
}

function confirmUpperChar() {
  var upperCharBool = confirm(
    "Would you like to include uppercase alphabetic characters?"
  );
  return upperCharBool;
}

function getRandomIndex(someArray){
  var randInt = Math.floor(Math.random() * someArray.length);
  return someArray[randInt];
}

function generatePassword() {
  // get user input length
  var password_len = getpwdLength();
  console.log(password_len);
  var passwordStr = '';

  // get user character type pref
  var spBool = confirmSpChar();
  var numBool = confirmNumChar();
  var lowerBool = confirmLowerChar();
  var upperBool = confirmUpperChar();

  // return null if user fails to pick at least one character type
  if (
    spBool === false &&
    numBool === false &&
    lowerBool === false &&
    upperBool === false
  ) {
    alert("Must pick at least one type of character.");
    return null;
  }
  // generates password if user selects only special characters
  else if (
    spBool === true &&
    numBool === false &&
    lowerBool === false &&
    upperBool === false
  ) {
    for (let i = 0; i < password_len; i++) {
      var randChar = getRandomIndex(spChar);
      passwordStr = passwordStr + randChar;
    }
    return passwordStr;
  }
  // generates password if user selects only numeric characters
  else if (
    spBool === false &&
    numBool === true &&
    lowerBool === false &&
    upperBool === false
  ) {
    for (let i = 0; i < password_len; i++) {
      var randChar = getRandomIndex(numChar);
      passwordStr = passwordStr + randChar;
    }
    return passwordStr;
  }
  // generates password if user selects only lowercase characters
  else if (
    spBool === false &&
    numBool === false &&
    lowerBool === true &&
    upperBool === false
  ) {
    for (let i = 0; i < password_len; i++) {
      var randChar = getRandomIndex(alphaLowerChar);
      passwordStr = passwordStr + randChar;
    }
    return passwordStr;
  }
  // generates password if user selects only uppercase characters
  else if (
    spBool === false &&
    numBool === false &&
    lowerBool === false &&
    upperBool === true
  ) {
    for (let i = 0; i < password_len; i++) {
      var randChar = getRandomIndex(alphaUpperChar);
      passwordStr = passwordStr + randChar;
    }
    return passwordStr;
  } // generates password if user selects special and numeric characters
  else if (
    spBool === true &&
    numBool === true &&
    lowerBool === false &&
    upperBool === false
  ) {
    for (let i = 0; i < password_len; i++) {
      passwordStr.concat(getRandomIndex(numChar));
    }
    return passwordStr;
  }
  
  

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
