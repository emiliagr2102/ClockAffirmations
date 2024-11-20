// Lista de afirmaciones positivas
const affirmations = [
  "You are capable of amazing things.",
  "Every day is a new beginning.",
  "You have the power to create change.",
  "Stay positive, work hard, and make it happen.",
  "You are stronger than you think.",
  "Believe in yourself and all that you are.",
  "Success is the sum of small efforts repeated daily."
];

// Función para actualizar el reloj y las afirmaciones
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;

  // Cambiar afirmación cada hora
  const affirmationIndex = now.getHours() % affirmations.length;
  document.getElementById("affirmation").textContent = affirmations[affirmationIndex];
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);
updateClock(); // Llama inicialmente
