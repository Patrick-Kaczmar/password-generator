// Assignment Code
var generateBtn = document.querySelector("#generate");
// list of arrays the user will select with confirm prompts
var lowerCaseArray = ["abcdefghijklmnopqrstuvwxyz"];
var upperCaseArray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numericArray = ["0123456789"];
var specialArray = ["!#$%&'()*+,-./:;<=>?@^_`{|}~"];
// empty array for holding criteria options that will be pushed into it from the user 
var selectedCriteria = [];

// Write password to the #password input
function writePassword() {
  // WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

  passwordText.value = password;


}

// ***********************funtion here*****************************************
// write a funtion called generatepassword which will have a series of prompts
function generatePassword() {
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// we have to ask the user for how many characters they want in the password
// we have to check to make sure it is between 8 and 128
// otherwise, we tell the user to fix their input
    var userInputLength = prompt("Please choose the length of your password. (must be between 8 and 128 characters.)");
      // turns the user input from a string to a number
        userInputLength = parseInt(userInputLength)
          if (userInputLength < 8 || userInputLength > 128 || !Number.isInteger(userInputLength)) {
            alert("Error! Please pick a number between 8 and 128");
            // restarts function if conditions are not met
               generatePassword();
          }


// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// confirm if they want lowercase
var lowerCase = confirm("Do you want lowercase characters?");
if (lowerCase == true){
  selectedCriteria = selectedCriteria.concat(lowerCaseArray)
}
// confirm if they want uppercase
var upperCase = confirm("Do you want uppercase characters?");
if (upperCase == true){
  selectedCriteria = selectedCriteria.concat(upperCaseArray)
}
// confirm if they want numeric
var numeric = confirm("Do you want numeric characters?");
if (numeric == true){
  selectedCriteria = selectedCriteria.concat(numericArray)
}
// confirm if they want special characters
var special = confirm("Do you want special characters?");
if (special == true){
  selectedCriteria = selectedCriteria.concat(specialArray)
}

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// we need to show an error if they gave us no characters to choose from
if (lowerCase == false && upperCase == false && numeric == false && special == false) {
  alert("Please choose at least one character type!");
  // restart function if all confirms = false
    generatePassword();
}


// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// from all the characters chosen, choose one randomly and add it to our password x number of times

console.log(selectedCriteria)
// for (i = 0; i < userInputLength + 1 ; i++) {
  
// }


}
// ***********************funtion ends here*****************************************

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
