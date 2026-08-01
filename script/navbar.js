// const loginButton = document.getElementById("loginButton");
// const mobileLoginButton = document.getElementById("mobileLoginButton");

// const nomeUsuario = localStorage.getItem("username" && "registerUsername");

// console.log(nomeUsuario)

// if (loginButton && nomeUsuario) {

//     loginButton.textContent = "Minha conta";
//     loginButton.href = "userarea.html";
//     mobileLoginButton.textContent = "Minha conta";
//     mobileLoginButton.href = "userarea.html";

// }

// const loginButton = document.getElementById("loginButton");
// const mobileLoginButton = document.getElementById("mobileLoginButton");

// const nomeUsuario = localStorage.getItem("username");

// if (nomeUsuario) {

//     if (loginButton) {
//         loginButton.textContent = "Minha conta";
//         loginButton.href = "userarea.html";
//     }

//     if (mobileLoginButton) {
//         mobileLoginButton.textContent = "Minha conta";
//         mobileLoginButton.href = "userarea.html";
//     }

// }

const usuario = JSON.parse(

    localStorage.getItem("usuarioLogado")

);

if(usuario){

    loginButton.textContent="Minha conta";

    loginButton.href="userarea.html";

    mobileLoginButton.textContent="Minha conta";

    mobileLoginButton.href="userarea.html";

}