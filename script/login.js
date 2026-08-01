/*==========================================
            ELEMENTOS
==========================================*/

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const openRegister = document.getElementById("openRegister");
const backLogin = document.getElementById("backLogin");

const togglePasswordButtons = document.querySelectorAll(".toggle-password");

const forms = document.querySelectorAll("form");

const loginFormulario = document.getElementById("loginformulario");
const registerFormulario = document.getElementById("registerFormulario");


/*==========================================
    BANCO DE DADOS LOCAL
==========================================*/

let usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];

function salvarUsuarios(){

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

}

function cadastrarUsuario(username, password){

    const existe = usuarios.find(user =>
        user.username === username
    );

    if(existe){

        alert("Esse usuário já existe.");

        return false;

    }

    const usuario = {

        username: username,

        password: password,

        numeroUsuario:
            Math.floor(Math.random() * 31),

        pontos: 0,

        nivel: 1

    };

    usuarios.push(usuario);

    salvarUsuarios();

    localStorage.setItem(
        "usuarioLogado",
        JSON.stringify(usuario)
    );

    return true;

}

function loginUsuario(username, password){

    const usuario = usuarios.find(user =>

        user.username === username &&
        user.password === password

    );

    if(!usuario){

        alert("Usuário ou senha inválidos.");

        return false;

    }

    localStorage.setItem(

        "usuarioLogado",

        JSON.stringify(usuario)

    );

    return true;

}

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
    GERAR NÚMERO DO USUÁRIO
==========================================*/

// function gerarNumeroUsuario(username){

//     console.log("Entrou na função");
//     console.log("Username recebido:", username);

//     const ultimoUsuario = localStorage.getItem("username");

//     console.log("Último usuário:", ultimoUsuario);

//     if(username !== ultimoUsuario){

//         const numeroAleatorio = Math.floor(Math.random() * 31);

//         console.log("Número gerado:", numeroAleatorio);

//         localStorage.setItem("numeroUsuario", numeroAleatorio);

//     }

//     localStorage.setItem("username", username);

// }

/*==========================================
        SUBMIT DOS FORMULÁRIOS
==========================================*/

forms.forEach(form=>{

    form.addEventListener("submit",e=>{

        e.preventDefault();

        if(!form.checkValidity()){

            form.reportValidity();

            return;

        }

        // LOGIN

        if(form.id==="loginformulario"){

            const username =
                document.getElementById("username").value.trim();

            const password =
                document.getElementById("loginPassword").value;

            if(loginUsuario(username,password)){

                window.location.href="userarea.html";

            }

        }

        // CADASTRO

        if(form.id==="registerFormulario"){

            const username =
                document.getElementById("registerUsername").value.trim();

            const password =
                document.getElementById("registerPassword").value;

            if(cadastrarUsuario(username,password)){

                window.location.href="userarea.html";

            }

        }

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

console.log("EcoQuebrada Login ATUALIZADO carregado!");



