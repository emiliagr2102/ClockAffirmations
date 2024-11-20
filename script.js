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
  "Eres fuerte y resiliente.",
  "I am enough, just as I am.",
  "Honro mi cuerpo y lo trato con cuidado.",
  "I radiate love and positivity.",
  "I trust my inner artist.",
  "I am inspired by the world around me.",
  "I am constantly discovering new talents.",
  "I bring beauty and meaning to everything I create.",
  "I turn my dreams into reality.",
  "I am proud of who I am becoming.",
  "I have everything I need to thrive.",
  "I am resilient and strong.",
  "I attract positive energy into my life.",
  "I celebrate my achievements, big and small."
  "I am capable of achieving my goals.",
  "I believe in my ability to succeed.",
  "I share my talents with joy and authenticity.",
  "The world needs my unique contributions.",
  "I am here to make a positive impact.",
  "My voice is powerful and deserves to be heard.",
  "I inspire others by being my true self.",
  "I use my creativity to uplift others.",
  "I am aligned with my highest purpose.",
  "I am grateful for who I am and who I am becoming.",
  "I am limitless in my potential.",
  "I am grounded, calm, and confident.",
  "I embrace change as a natural part of growth.",
  "I choose to see the best in myself and others.",
  "I trust the wisdom within me.",
  "I honor my path and trust the process.",
  "I am a creator of my reality.",
];


// Función para mostrar la hora
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Función para cambiar la afirmación cada 15 minutos
function updateAffirmation() {
    const index = Math.floor((new Date().getMinutes() / 15)) % affirmations.length;
    document.getElementById('affirmation').textContent = affirmations[index];
}

// Actualizar reloj y afirmaciones
setInterval(() => {
    updateClock();
    updateAffirmation();
}, 1000);

// Inicializar afirmación y reloj al cargar
updateClock();
updateAffirmation();
