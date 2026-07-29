/*==========================================
            ELEMENTOS
==========================================*/

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const openRegister = document.getElementById("openRegister");
const backLogin = document.getElementById("backLogin");

const togglePasswordButtons = document.querySelectorAll(".toggle-password");

const forms = document.querySelectorAll("form");

/*==========================================
        ABRIR CADASTRO
==========================================*/

openRegister.addEventListener("click", () => {

    loginForm.classList.remove("active");

    setTimeout(() => {

        registerForm.classList.add("active");

    }, 150);

});

/*==========================================
        VOLTAR LOGIN
==========================================*/

backLogin.addEventListener("click", () => {

    registerForm.classList.remove("active");

    setTimeout(() => {

        loginForm.classList.add("active");

    }, 150);

});

/*==========================================
        MOSTRAR SENHA
==========================================*/

togglePasswordButtons.forEach(button => {

    button.addEventListener("click", () => {

        const input = button.previousElementSibling;

        const icon = button.querySelector("i");

        if(input.type === "password"){

            input.type = "text";

            icon.classList.remove("fa-eye");

            icon.classList.add("fa-eye-slash");

        }else{

            input.type = "password";

            icon.classList.remove("fa-eye-slash");

            icon.classList.add("fa-eye");

        }

    });

});

/*==========================================
    VALIDAÇÃO SENHAS
==========================================*/

const registerPassword = document.getElementById("registerPassword");

const confirmPassword = document.getElementById("confirmPassword");

if(registerPassword && confirmPassword){

    confirmPassword.addEventListener("input", () => {

        if(confirmPassword.value === ""){

            confirmPassword.setCustomValidity("");

            return;

        }

        if(confirmPassword.value !== registerPassword.value){

            confirmPassword.setCustomValidity("As senhas não coincidem.");

        }else{

            confirmPassword.setCustomValidity("");

        }

    });

}

/*==========================================
        SUBMIT DOS FORMULÁRIOS
==========================================*/

forms.forEach(form => {

    form.addEventListener("submit", e => {

        e.preventDefault();

        if(!form.checkValidity()){

            form.reportValidity();
            

            return;

        }

        console.log("Formulário válido!");
        window.location.href = "userarea.html";


    });

});

/*==========================================
        ANIMAÇÃO INPUTS
==========================================*/

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.parentElement.classList.add("focused");

    });

    input.addEventListener("blur", () => {

        if(input.value === ""){

            input.parentElement.classList.remove("focused");

        }

    });

});

/*==========================================
        FECHAR COM ESC
==========================================*/

document.addEventListener("keydown", e => {

    if(e.key === "Escape"){

        window.location.href = "index.html";

    }

});

/*==========================================
        ENTER
==========================================*/

document.addEventListener("keydown", e => {

    if(e.key === "Enter"){

        const activeForm = document.querySelector(".form-content.active");

        if(activeForm){

            const button = activeForm.querySelector(".btn-login");

            if(button){

                button.click();

            }

        }

    }

});

/*==========================================
        LOADER
==========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*==========================================
        DEBUG
==========================================*/

console.log("EcoQuebrada Login carregado!");

const loginFormulario = document.getElementById("loginformulario");

loginFormulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value.trim();

    if (username === "") {

        alert("Digite seu nome de usuário.");

        return;

    }

    // Salva o nome do usuário
    localStorage.setItem("username", username);

    // Vai para a página do usuário
    window.location.href = "userarea.html";

});
