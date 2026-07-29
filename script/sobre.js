/* ==========================================
   MENU MOBILE
========================================== */

const menuButton = document.getElementById("menu-mobile");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");


/* ==========================================
   ABRIR / FECHAR MENU
========================================== */

menuButton.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");

    overlay.classList.toggle("active");

});


/* ==========================================
   FECHAR AO CLICAR NO OVERLAY
========================================== */

overlay.addEventListener("click", function () {

    mobileMenu.classList.remove("active");

    overlay.classList.remove("active");

});


/* ==========================================
   FECHAR AO CLICAR EM UM LINK
========================================== */

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

        overlay.classList.remove("active");

    });

});