// Assignment code here

// Store arrays of different types of characters
var spChar = 
[',','.', ':','~','!','@','#','$','%','^','&','*','(',
')','_','-','`','=','+','{','}','{','}','\\', ';','|',
'/'];

var numChar = ['0','1','2','3','4','5','6','7','8','9'];

var alphaLowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','s','y','z'];

var alphaUpperChar= [];

for (let i = 0; i < alphaLowerChar.length; i++){
  alphaUpperChar.push(alphaLowerChar[i].toUpperCase()); 
}

// console.log(spChar);
// console.log(alphaUpperChar);





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
