import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let tamanoActual = 120;
const PALOS = ["♦", "♥", "♠", "♣"];
const VALORES = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

function generarCarta() {
  const palo = randomItem(PALOS);
  const valor = randomItem(VALORES);

  const carta = document.createElement("div");
  carta.id = "carta-display"; // ← NECESARIO
  const color = (palo === "♦" || palo === "♥") ? "red" : "black";

  carta.classList.add("card", color);
  carta.innerHTML = `
    <div class="corner top">${palo}</div>
    <div class="value">${valor}</div>
    <div class="corner bottom">${palo}</div>
  `;

  document.body.appendChild(carta);
}

function aumentarTamano() {
    tamanoActual += 10;
            console.log("tamano aumentado");
    aplicarTamano();
}

function disminuirTamano() {
    // Evita que el tamaño sea negativo o demasiado pequeño
    if (tamanoActual > 30) { 
        tamanoActual -= 10;
        console.log("tamano disminuido");
        aplicarTamano();
    }
}
function aplicarTamano() {
    // Busca el contenedor principal de la carta o la carta misma
    const cartaDisplay = document.getElementById('carta-display');
    if (cartaDisplay) {
        cartaDisplay.style.width = `${tamanoActual}px`;
        cartaDisplay.style.height = `${tamanoActual * 1.4}px`; // proporción estándar de una carta
        cartaDisplay.style.fontSize = `${tamanoActual / 4}px`; // ajusta contenido
    }
}

const primerdiv = document.createElement('div')
primerdiv.innerHTML = `
        <button id="btnGenerarCarta">Generar Nueva Carta</button>
        <button id="btnAumentar">Aumentar (+)</button> 
        <button id="btnDisminuir">Disminuir (-)</button>`;


window.onload = function() {
document.body.appendChild(primerdiv)
const boton = document.getElementById('btnGenerarCarta');
    boton.addEventListener('click', generarCarta);
    document.getElementById('btnAumentar').addEventListener('click', aumentarTamano);
    document.getElementById('btnDisminuir').addEventListener('click', disminuirTamano);
  console.log("Hello Rigo from the console!");
  generarCarta()
  aplicarTamano();
  setInterval(generarCarta, 3000);
};
