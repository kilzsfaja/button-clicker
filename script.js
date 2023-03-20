var login = document.querySelector("#login");

function logInOut() {
  if ((login.innerText == "Login")) {
    login.innerText = "Logout";
  } else if ((login.innerText == "Logout")) {
    login.innerText = "Login";
  }
}
