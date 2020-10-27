/** @format */

// Login Page
// 1- si ils sont egales a une valeur exemple user@gmail.com et le mot de passe user
let mail = document.querySelector(".email");
let password = document.querySelector(".password");
let btnLog = document.querySelector(".submit-btn"); //Sumbit button

//2. addEventListener and check email & password using function checkLog
btnLog.addEventListener("click", checkLog);

//3. Ecrire la fonction de controle

function checkLog() {
  var displayIn = document.querySelector(".loged-in");
  var displayErr = document.querySelector(".err");
  console.log("Email: " + mail.value);
  console.log("Password: " + password.value);
  console.log(displayIn);

  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mail.value.match(mailformat)) {
    console.log(displayIn);
    document.querySelector(".content").style.display = "none";

    displayIn.style.display = "block";
  } else {
    //alert("Email or password incorrect !!");
    displayErr.innerHTML = "Email or password incorrect !!";
  }
}

$(function () {
  $("#datepicker")
    .datepicker({
      autoclose: true,
      todayHighlight: true,
    })
    .datepicker("update", new Date());
});