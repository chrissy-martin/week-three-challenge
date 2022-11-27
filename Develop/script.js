
// Assignment code here

var charTypes = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  special: "!#$%&()*+-./<=>?@[]^{|}~",
};

function generatePassword() {
  var randomPassword = "";

  var length = window.prompt(" Please enter a number between 8-128 for a password length.");

  var lowercase = window.confirm("Do you want to use lowercase letters?");
  if (lowercase) {
    randomPassword += charTypes.lowercase;
  };

  var uppercase = window.confirm("Do you want to use uppercase letters?");
  if (uppercase) {
    randomPassword += charTypes.uppercase;
  };

  var special = window.confirm("Do you want to use special characters?");
  if (special) {
    randomPassword += charTypes.special;
  };

  var numbers = window.confirm("Do you want to use numbers?");
  if (numbers) {
    randomPassword += charTypes.number;
  };
  var password = "";
  for (let i = 0; i < length; i++) {
    password += randomPassword[Math.floor(Math.random() * randomPassword.length)]
  }
  return password;
}

console.log(generatePassword());

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
