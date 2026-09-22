let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

const ALTO_GATO=50;
const ANCHO_GATO=50;
const ALTO_COMIDA=50;
const ANCHO_COMIDA=50;


function iniciarJuego(){
    // Center the cat on the 500x500 canvas
    gatoX = 225;
    gatoY = 225;
    
    // Position food in the bottom right corner
    comidaX = 450;
    comidaY = 450;
    
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

}