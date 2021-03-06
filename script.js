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

  // variable to hold password that will be generated and randomized
  var userPassword = ("");

    // ask the user a list of question prompts at least once 
  do {
    var passwordLength = prompt("Please choose between 8 and 128 characters for your password");
    // changes the user input from a string to a integer
      passwordLength = parseInt(passwordLength);
    console.log("user has chosen a length of " + passwordLength);

    if (passwordLength < 8 || passwordLength > 128 || passwordLength !== parseInt(passwordLength)) {
      console.log("user input does not match criteria");
      alert("You have entered a incorrect value, please try again");
    }
    // condition for repeating the prompt if user input is not within criteria 
  } while (passwordLength < 8 || passwordLength > 128 || passwordLength !== parseInt(passwordLength));
  

  do {
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
      console.log("user does not want numeric characters");
    }

    // ask the user if they want special characters
    var special = confirm("Do you want special characters?");
    if (special == true) {
      console.log("user wants special characters");
    }
    else {
      console.log("user does not want special characters");
    }
    // Alerts the user if they did not meet the criteria to generate a password
    if (lowercase == false && uppercase == false && numeric == false && special == false) {
      console.log("user did not meet criteria");
      alert("Please choose at least one character type for your password");
    }
    // condition that states while its true, run this piece of code again 
  } while (lowercase == false && uppercase == false && numeric == false && special == false);

  // the loop that will pick a random character from each set of strings the user has choosen 
  for (i = 1; i <= passwordLength; i++) {
    // creating the variables holding the usable characters 
    var lowercaseChar = ("abcdefghijklmnopkrstuvwxyz");
    var uppercaseChar = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    var numericChar = ("0123456789");
    var specialChar = ("!#$%&'()*+-./:;<=>?@][^_`{|}~");

    // if the user selected they want a lowercase character, pick a random character from the lowercaseChar string
    if (lowercase == true) {
      lowercaseChar = lowercaseChar.charAt(Math.floor(Math.random() * lowercaseChar.length));
      console.log("this is the random lowercase letter chosen: " + lowercaseChar);
      userPassword = userPassword + lowercaseChar;
    }

    // if the user selected they want a uppercase character, pick a random character from the uppercaseChar string
    if (uppercase == true) {
      uppercaseChar = uppercaseChar.charAt(Math.floor(Math.random() * uppercaseChar.length));
      console.log("this is the random uppercase letter chosen: " + uppercaseChar);
      userPassword = userPassword + uppercaseChar;
    }

    // if the user selected they want a numeric character, pick a random character from the numericChar string
    if (numeric == true) {
      numericChar = numericChar.charAt(Math.floor(Math.random() * numericChar.length));
      console.log("this is the random numeric character chosen: " + numericChar);
      userPassword = userPassword + numericChar;
    }

    // if the user selected they want a special character, pick a random character from the specialChar string
    if (special == true) {
      specialChar = specialChar.charAt(Math.floor(Math.random() * specialChar.length));
      console.log("this is the random special character chosen: " + specialChar);
      userPassword = userPassword + specialChar;
    }

    
    console.log("This is the current password " + userPassword);
    console.log("this is the current password length " + userPassword.length);

  }

  // Making sure the password is the correct length the user asked for by removing any extra characters
  userPassword = userPassword.slice(0, passwordLength);
  console.log("This is the password after using slice method: " + userPassword);

  // Turning the string into an array with every character as its own string 
  userPassword = userPassword.split("");
  console.log("this is the new array with all characters as substrings: " + userPassword);

  // Durstenfeld shuffle method is used here for a more unbiased random solution to the array
  for (i = userPassword.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = userPassword[i];
    userPassword[i] = userPassword[j];
    userPassword[j] = temp;
  }
  console.log("userPassword after using the Durstenfeld shuffle method: " + userPassword);

  // this turns the array back into a string 
  userPassword = userPassword.toString();
  console.log("Turns the password back into a string: " + userPassword);

  // this removes all the commas created when turning the original string into an array 
  userPassword = userPassword.replace(/,/g, "");
  console.log("password after all the comma's have been removed " + userPassword);

  // displays the password to the page 
  return userPassword;
}
// ***********************funtion ends here*****************************************

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);