// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
var password = generatePassword();
var lettersOn;
var numbersOn;
var specialCharOn;
var userInput;

function generatePassword() {
    var newPass = ""; 
    var alphabetCharacters = 'abcdefghijklmnopqrstuvwxyz '.split(
        '');
    var numericCharacters = '0123456789 '.split('');
    var specialCharacters = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~ '.split('');
    var lettersAndNumbers = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split('');
    var lettersAndSpecialChar = 'abcdefghijklmnopqrstuvwxyz!#$%&()*+,-./:;<=>?@[\]^_`{|}~ '.split('');
    var numbersAndSpecialChar = '0123456789!#$%&()*+,-./:;<=>?@[\]^_`{|}~ '.split('');
    var allCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,-./:;<=>?@[\]^_`{|}~ '.split('');

    lettersOn = window.confirm("Would you like letters?");
    numbersOn = window.confirm("Would you like numbers?");
    specialCharOn = window.confirm("Would you like Special Characters?");
    upperCaseCheck = window.confirm("Would you like your password to be uppercase?");
    userInput = window.prompt("How long should your password be? *NOTE: Your password must be within 8-128 Characters");


if (lettersOn && numbersOn && specialCharOn && (parseInt(userInput) >= 8) && (parseInt(userInput) <= 128) ) {
   //This for loop uses the user input as the number of loop iterations for the array.
   //It grabs a random string value on each pass and updates newPass on each pass.
    for (var i = 0; i < parseInt(userInput); i++) {
        var index = Math.floor(Math.random() * allCharacters.length);
        var x = allCharacters[index];
        newPass = (newPass + x);
    }
    
} else if (!lettersOn && numbersOn && specialCharOn && (parseInt(userInput) >= 8) && (parseInt(userInput) <= 128)) {
    for (var i = 0; i < parseInt(userInput); i++) {
        var index = Math.floor(Math.random() * numbersAndSpecialChar.length);
        var x = numbersAndSpecialChar[index];
        newPass = (newPass + x);
    }
} else if (!lettersOn && !numbersOn && specialCharOn && (parseInt(userInput) >= 8) && (parseInt(userInput) <= 128)) {
    for (var i = 0; i < parseInt(userInput); i++) {
        var index = Math.floor(Math.random() * specialCharacters.length);
        var x = specialCharacters[index];
        newPass = (newPass + x);
    }
} else if (lettersOn && !numbersOn && specialCharOn && (parseInt(userInput) >= 8) && (parseInt(userInput) <= 128)) {
    for (var i = 0; i < parseInt(userInput); i++) {
        var index = Math.floor(Math.random() * lettersAndSpecialChar.length);
        var x = lettersAndSpecialChar[index];
        newPass = (newPass + x);
    }
} else if (lettersOn && numbersOn && !specialCharOn && (parseInt(userInput) >= 8) && (parseInt(userInput) <= 128)) {
    for (var i = 0; i < parseInt(userInput); i++) {
        var index = Math.floor(Math.random() * lettersAndNumbers.length);
        var x = lettersAndNumbers[index];
        newPass = (newPass + x);
    }
} else if (lettersOn && !numbersOn && !specialCharOn && (parseInt(userInput) >= 8) && (parseInt(userInput) <= 128)) {
    for (var i = 0; i < parseInt(userInput); i++) {
        var index = Math.floor(Math.random() * alphabetCharacters.length);
        var x = alphabetCharacters[index];
        newPass = (newPass + x);
    }
} else if (!lettersOn && numbersOn && !specialCharOn && (parseInt(userInput) >= 8) && (parseInt(userInput) <= 128)) {
    for (var i = 0; i < parseInt(userInput); i++) {
        var index = Math.floor(Math.random() * numericCharacters.length);
        var x = numericCharacters[index];
        newPass = (newPass + x);
    }
}
else {
    window.alert("*Your password must be between 8-128 Characters. Please try again.");
}
//checks for user's choice on uppercase and then converts it to uppercase if TRUE.
if (upperCaseCheck) {
    newPass = newPass.toUpperCase();
}
return newPass

}
var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);