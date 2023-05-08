const $MENU = document.querySelector("#menu");
let contadorInteracciones = 0;

$MENU.addEventListener("click", () => {
    let $barraDeNavegacionInferior = document.querySelector("#navbar-right");
    let $barraDeNavegacionSuperior = document.querySelector("#navbar-left");
    if (contadorInteracciones === 1) {
        $barraDeNavegacionInferior.style.display = "none";
        $barraDeNavegacionSuperior.style.paddingTop = "0";
        contadorInteracciones--;
    } else {
        $barraDeNavegacionInferior.style.display = "flex";
        $barraDeNavegacionSuperior.style.paddingTop = "4rem";
        contadorInteracciones++;
    }
})