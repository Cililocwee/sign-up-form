import css from "./style.css"

// to format phone numbers correctly
function phoneFormat(input) {//returns (###) ###-####
    input = input.replace(/\D/g,'');
    var size = input.length;
    if (size>0) {input="("+input}
    if (size>3) {input=input.slice(0,4)+") "+input.slice(4,11)}
    if (size>6) {input=input.slice(0,9)+"-" +input.slice(9)}
    return input;
}

// make sure the passwords match
/* IMPORTANT NOTE: For password confirmation validation 
    you must have the id name as ONE WORD. This is due to
    Chrome and IE returning a null value on password
    object values with ids that are kebab-cased*/
var password = document.getElementById("passwordstring");
var confirm_password = document.getElementById("confirmpasswordstring");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

