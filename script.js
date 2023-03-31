
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!'#$%&()*+,-./:;=?@[/]";

function generatePassword() {
  let password = "";
  var length = document.getElementById("length").value;
  var useLowercase = document.getElementById("lowercase").checked;
  var useUppercase = document.getElementById("uppercase").checked;
  var useNumbers = document.getElementById("numbers").checked;
  var useSpecial = document.getElementById("special").checked;
  var allChars =
    (useLowercase ? lowercase : "") +
    (useUppercase ? uppercase : "") +
    (useNumbers ? numbers : "") +
    (useSpecial ? special : "");

  if (!allChars) {
    alert("Please select at least one character type.");
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById("password").value = password;
}

document.getElementById("generate").addEventListener("click", generatePassword);



