const loginButton = document.getElementById("loginButton");

const username = localStorage.getItem("username");

if (loginButton && username) {

    loginButton.textContent = "Minha conta";

    loginButton.href = "userarea.html";

}