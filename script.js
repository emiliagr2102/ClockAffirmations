// Afirmaciones positivas
const affirmations = [
  "¡Eres increíble!",
  "Confía en ti, todo es posible.",
  "Cada día eres mejor.",
  "El universo está a tu favor.",
  "Eres valiente y capaz.",
  "Hoy es un gran día para ser feliz.",
  "Eres digno de amor y respeto.",
  "La creatividad fluye a través de ti.",
  "Tus sueños están al alcance de tu mano.",
  "Eres un imán para las cosas buenas.",
  "Tu energía positiva es contagiosa.",
  "Eres fuerte y resiliente."
];

// Función para obtener la afirmación según la hora actual
function getAffirmation() {
  const hour = new Date().getHours();
  return affirmations[hour % affirmations.length]; // Selección cíclica
}

// Actualizar el reloj y la afirmación
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour12: false });
  document.getElementById('time').textContent = time;

  const affirmation = getAffirmation();
  document.getElementById('affirmation').textContent = affirmation;
}

// Actualización cada segundo
setInterval(updateClock, 1000);

// Inicializar
updateClock();
