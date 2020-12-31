// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  console.log("button has been clicked to generate password");
  console.log("password is currently: " + userPassword);

  // variable to hold password that will be randomized
  var userPassword = ("");

    // ask the user a list of question prompts at least once 
  do {
    var passwordLength = prompt("Please choose between 8 and 128 characters for your password");
    console.log("user has chosen a length of " + passwordLength);

      // ask the user if they want lowercase characters
    var lowercase = confirm("Do you want lowercase characters?");
    if (lowercase == true) {
      console.log("user wants lowercase characters");
    }
    else {
      console.log("user does not want lowercase characters")
    }

    // ask the user if they want uppercase characters
    var uppercase = confirm("Do you want uppercase characters?");
    if (uppercase == true) {
      console.log("user wants uppercase characters");
    }
    else {
      console.log("user does not want uppercase characters")
    }

    // ask the user if they want numeric characters
    var numeric = confirm("Do you want numeric characters?");
    if (numeric == true) {
      console.log("user wants numeric characters");
    }
    else {
      console.log("user does not want numeric characters")
    }

    // ask the user if they want special characters
    var special = confirm("Do you want special characters?");
    if (special == true) {
      console.log("user wants special characters");
    }
    else {
      console.log("user does not want special characters");
    }

    if (passwordLength < 8 || passwordLength > 128 || lowercase == false && uppercase == false && numeric == false && special == false) {
      console.log("user did not meet criteria")
      alert("Cant you do anything right?")
    }

  } while (passwordLength < 8 || passwordLength > 128 || lowercase == false && uppercase == false && numeric == false && special == false);

  // the part where you randomize the password
  for (i = 1; i <= passwordLength; i++) {
    // creating the variables holding the usable characters 
    var lowercaseChar = ("abcdefghijklmnopkrstuvwxyz");
    var uppercaseChar = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    var numericChar = ("0123456789");
    var specialChar = ("!#$%&'()*+,-./:;<=>?@]\[^_`{|}~");

    if (lowercase == true) {
      lowercaseChar = lowercaseChar.charAt(Math.floor(Math.random() * lowercaseChar.length))
      console.log("this is the random lowercase letter chosen: " + lowercaseChar);
      userPassword = userPassword + lowercaseChar;
    }

    if (uppercase == true) {
      uppercaseChar = uppercaseChar.charAt(Math.floor(Math.random() * uppercaseChar.length))
      console.log("this is the random uppercase letter chosen: " + uppercaseChar);
      userPassword = userPassword + uppercaseChar;
    }

    if (numeric == true) {
      numericChar = numericChar.charAt(Math.floor(Math.random() * numericChar.length))
      console.log("this is the random numeric character chosen: " + numericChar);
      userPassword = userPassword + numericChar;
    }

    if (special == true) {
      specialChar = specialChar.charAt(Math.floor(Math.random() * specialChar.length))
      console.log("this is the random special character chosen: " + specialChar);
      userPassword = userPassword + specialChar;
    }

    
    console.log("This is the current password " + userPassword)
    console.log("this is the current password length " + userPassword.length)

  }

return userPassword


}
// ***********************funtion ends here*****************************************

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// we have to ask the user for how many characters they want in the password
// we have to check to make sure it is between 8 and 128
// otherwise, we tell the user to fix their input
    


// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// we need to show an error if they gave us no characters to choose from



// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// from all the characters chosen, choose one randomly and add it to our password x number of times