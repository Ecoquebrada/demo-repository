/*=====================================
    MENU MOBILE
=====================================

const menuButton = document.querySelector(".menu-mobile");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");

    const icon = menuButton.querySelector("i");

    if (nav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

*/

/* ==========================================
   MENU MOBILE
========================================== */

const menuButton = document.querySelector(".menu-mobile");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");


if (menuButton && mobileMenu && overlay) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        overlay.classList.toggle("active");

    });


    /* Fechar clicando no overlay */

    overlay.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        overlay.classList.remove("active");

    });


    /* Fechar ao clicar em um link */

    const menuLinks =
        mobileMenu.querySelectorAll("a");


    menuLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            overlay.classList.remove("active");

        });

    });

}
/*=====================================
    FECHAR MENU AO CLICAR
=====================================*/

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

/*=====================================
    HEADER AO ROLAR
=====================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 20){

        if(window.scrollY>20){

        header.style.background="#fff";

    }


}});

/*=====================================
    CONTADORES
=====================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = target / 120;

            function update(){

                current += increment;

                if(current < target){

                    counter.innerText =
                    Math.floor(current).toLocaleString("pt-BR");

                    requestAnimationFrame(update);

                }else{

                    counter.innerText =
                    target.toLocaleString("pt-BR");

                }

            }

            update();

            counterObserver.unobserve(counter);

        }

    });

},{
    threshold:.6
});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

/*=====================================
    ANIMAÇÃO DAS SEÇÕES
=====================================*/

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

/*=====================================
    SCROLL SUAVE
=====================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



/*=====================================
    EFEITO PARALLAX HERO
=====================================*/

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll",()=>{

    if(heroImage){

        heroImage.style.transform =
        `translateY(${window.scrollY * 0.08}px)`;

    }

});

/*=====================================
    ANIMAÇÃO DOS BOTÕES
=====================================*/

document.querySelectorAll(".btn-primary, .btn-secondary").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform = "translateY(-4px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform = "";

    });

});

/*=====================================
    PRELOADER (Opcional)
=====================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

console.log("EcoQuebrada carregado com sucesso!");


/* Carrousel */

const ecopontos = [

{
    nome: "Ecoponto Centro",
    imagem: "assets/imageHero.png",

    endereco: "Rua das Flores, 230",

    distancia: "1,8 km",

    horario: "08h às 18h",

    materiais: [
        "Papel",
        "Plástico",
        "Vidro",
        "Metal"
    ],

    maps:"https://maps.google.com/?q=-23.55052,-46.633308"
},

{
    nome:"Ecoponto Vila Verde",

    imagem:"img/ecopontos/vila-verde.jpg",

    endereco:"Av. Brasil, 1020",

    distancia:"3,2 km",

    horario:"07h às 19h",

    materiais:[
        "Papel",
        "Vidro",
        "Eletrônicos"
    ],

    maps:"https://maps.google.com/?q=-23.560,-46.630"

}

];

let indice = 0;

function carregarEcoponto(){

    const e = ecopontos[indice];

    foto.src = e.imagem;

    nome.innerHTML = e.nome;

    distancia.innerHTML = e.distancia;

    endereco.innerHTML = e.endereco;

    horario.innerHTML = e.horario;

    maps.href = e.maps;

    materiais.innerHTML = "";

    e.materiais.forEach(item=>{

        materiais.innerHTML += `<li>${item}</li>`;

    });

}

next.onclick=()=>{

    indice++;

    if(indice>=ecopontos.length)
        indice=0;

    carregarEcoponto();

}

prev.onclick=()=>{

    indice--;

    if(indice<0)
        indice=ecopontos.length-1;

    carregarEcoponto();

}

carregarEcoponto();

