// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var characters = prompt("how many characters do you want your password to be? (between 8-128)");
  if(characters < 8 || characters > 128){
    return passwordText.value = "Pick a number between 8-128";
  };
  var lowercase = [..."abcdefghijklmnopqrstuvwxyz"];
  var uppercase = [..."abcdefghijklmnopqrstuvwxyz".toUpperCase()];
  var numeric = [..."1234567890"];
  var specChar = [..."!@#$%^&*()"];

  var hasLowerCase = confirm("Has lowercase letters");
  var hasUpperCase = confirm("Has uppercase letters");
  var hasNumbers = confirm("Has numbers");
  var hasSpecChar = confirm("Has special characters");
  if(!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSpecChar) {
    return passwordText.value = "Please select password criteria";
  };

  var selectedCriteria = [];

  if(hasLowerCase){
    selectedCriteria.push(...lowercase);
  };
  if(hasUpperCase){
    selectedCriteria.push(...uppercase);
  };
  if(hasNumbers){
    selectedCriteria.push(...numeric);
  };
  if(hasSpecChar){
    selectedCriteria.push(...specChar);
  };
  
  let password = "";
 
  for(let i = 0; i < parseInt(characters); i++) {
    password += selectedCriteria[Math.floor(Math.random() * selectedCriteria.length)];
  }

  return passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);