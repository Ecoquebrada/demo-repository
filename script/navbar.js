const loginButton = document.getElementById("loginButton");
const mobileLoginButton = document.getElementById("mobileLoginButton");

const username = localStorage.getItem("username");

if (loginButton && username) {

    loginButton.textContent = "Minha conta";
    mobileLoginButton.textContent = "Minha conta"

    loginButton.href = "userarea.html";
    mobileLoginButton.href = "userarea.html";

}