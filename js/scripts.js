/*
js\scripts.js
JavaScript do template 
*/


/********************
 * Aviso de cookies *
 ********************/

const cookieBanner = document.getElementById("cookie-banner");
const cookieAccept = document.getElementById("cookie-accept");

// Verifica se o usuário já aceitou os cookies
if (localStorage.getItem("cookiesAccepted") === "true") {
    cookieBanner.style.display = "none";
}

// Botão "Aceitar"
cookieAccept.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
});