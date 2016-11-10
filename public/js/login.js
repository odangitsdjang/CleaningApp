  // $(document).ready(function(){
  //       $('.log-btn').click(function(){
  //           $('.log-status').addClass('wrong-entry');
  //          $('.alert').fadeIn(500);
  //          setTimeout( "$('.alert').fadeOut(1500);",3000 );
  //       });
  //       $('.form-control').keypress(function(){
  //           $('.log-status').removeClass('wrong-entry');
  //       });

  //   });

var userCount = (localStorage.getItem('userCount')===null)?0:(localStorage.getItem('userCount'));

$(document).ready(function() {
  //window.localStorage.clear();
  initializePage();

})

function initializePage() {
  var modal = document.getElementById('signUpModal');
  var signUp = document.getElementById("saveSignUp");
  var logIn = document.getElementById("login-btn");
  var btn = document.getElementById("signup-btn");
  var login_btn = document.getElementById('login-btn');
  var span = document.getElementsByClassName("cancelBtn")[0];

  btn.onclick = function() {
      modal.style.display = "block";
  }

  span.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  logIn.onclick = function validate(){
    var username = document.getElementById("UserName").value;
    var password = document.getElementById("Passwod").value;
    var matchName = "";
    var matchPass = "";

    for(var i = 0; i < userCount; i++){
      if(localStorage.getItem("userName"+i) == username)
        matchName = username;
      if(localStorage.getItem("userPassword"+i) == password)
        matchPass = password;
    }
    if ( matchName == "" || matchPass == ""){
      alert ("Login Failed");
      //window.location = "success.html"; // Redirecting to other page.
      return false;
    } 
    else{
      localStorage.setItem("currentUser",matchName);
      window.location = "/index";
    }
  }

  signUp.onclick = function signUp(){
    var username = document.getElementById("signUpName").value;
    var password = document.getElementById("signUpEmail").value;
    var email = document.getElementById("signUpEmail").value;

    if (username == "" || password == "" || email == ""){
      alert("Invalid name/password/email!");
    }
    else{
      localStorage.setItem("userName"+userCount,username);
      localStorage.setItem("userEmail"+userCount,email);
      localStorage.setItem("userPassword"+userCount,password);
      userCount++;
      localStorage.setItem("userCount", userCount);
      modal.style.display = "none";
      alert("Account Created!");
    }

  }
}
  
