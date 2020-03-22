// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let hasSpecialCharacters = confirm("Special Charatiers");
const specialCharacters = ["!","@","#","$","%","^","&","*","(","0"];
let hasNumbers = confirm("Has Numbers");
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
let hasLetters = confirm("Has letters");
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let hasUCLetters = confirm("Has letters");
const ucLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const randomLetters = letters[Math.floor(Math.random()*letters.length)];
let pwlength = prompt("How long do you want your password to be");


console.log(pwLength);
//GENERATE PASSWORD
function generatePassword (specialCharacters, numbers, letters, ucLetters, pwlength) {

};