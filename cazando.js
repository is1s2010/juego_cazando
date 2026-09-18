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

    gatoX = 225; 
    gatoY = 225;

    comidaX = 450;
    comidaY = 450;

    graficarGato();
    graficarComida();
}

function graficarGato(){
    ctx.fillStyle="pink";
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO)
}


function graficarComida(){
    ctx.fillStyle="violet";
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA)
}