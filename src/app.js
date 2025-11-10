import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const PALOS = ["♦", "♥", "♠", "♣"];
const VALORES = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

function generarCarta() {
  const palo = randomItem(PALOS);
  const valor = randomItem(VALORES);

  const carta = document.createElement("div");
  const color = (palo === "♦" || palo === "♥") ? "red" : "black";

  carta.classList.add("card", color);
  carta.innerHTML = `
    <div class="corner top">${palo}</div>
    <div class="value">${valor}</div>
    <div class="corner bottom">${palo}</div>
  `;

  document.body.appendChild(carta);
}



window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  generarCarta()
};
