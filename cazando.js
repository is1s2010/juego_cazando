let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
let puntos = 0;
let tiempo = 10;
let intervaloTiempo;

const ALTO_GATO=50;
const ANCHO_GATO=50;
const ALTO_COMIDA=50;
const ANCHO_COMIDA=50;


function iniciarJuego(){
    gatoX = 225;
    gatoY = 225;
    
    comidaX = 450;
    comidaY = 450;

    puntos = 0;
    tiempo = 10;
    
    clearInterval(intervaloTiempo); 
    intervaloTiempo = setInterval(restarTiempo, 1000);
    
    graficarGato();
    graficarComida();
}
function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function graficarGato(){
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "pink");
}

function graficarComida(){
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "violet");
}

function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia todo el canvas
}

function moverIzquierda() {
    gatoX -= 10;
    actualizarVista();
}

function moverDerecha() {
    gatoX += 10; 
    actualizarVista();
}

function moverArriba() {
    gatoY -= 10; 
    actualizarVista();
}

function moverAbajo() {
    gatoY += 10; 
    actualizarVista();
}

function actualizarVista() {
    limpiarCanva(); 
    graficarGato(); 
    graficarComida();
    detectarColision();

}


function detectarColision() {
    if (gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY) {
        
        alert("¡Atrapaste la comida!");
        
        puntos += 1;
        mostrarEnSpan("puntos", puntos); 
        
        comidaX = generarAleatorio(0, 500 - ANCHO_COMIDA);
        comidaY = generarAleatorio(0, 500 - ALTO_COMIDA);

        limpiarCanva();
        graficarGato();
        graficarComida();
 }
}

function restarTiempo() {
    tiempo -= 1;
    mostrarEnSpan("tiempo", tiempo); 

    if (puntos >= 6) {
        clearInterval(intervaloTiempo); 
        alert("¡Ganador!"); 
    } else if (tiempo <= 0) {
        clearInterval(intervaloTiempo); 
        alert("Game Over"); 
    }
}