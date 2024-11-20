// Lista de afirmaciones
const affirmations = [
    "I am worthy of love and respect.",
    "I am enough, just as I am.",
    "Creativity flows through me effortlessly.",
    "I trust my inner artist.",
    "I radiate positivity and attract the same.",
    "I am the architect of my life.",
    "I shine brightly, unapologetically.",
    "I am open to learning and growing every day.",
    "I honor my body and treat it with care.",
    "I turn challenges into opportunities to grow."
];

// Función para mostrar la hora actual
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); // Horas actuales
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Minutos actuales
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Segundos actuales
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Función para actualizar la afirmación cada 15 minutos
function updateAffirmation() {
    const now = new Date();
    const minuteIndex = Math.floor(now.getMinutes() / 15); // Índice basado en los minutos actuales
    const affirmationIndex = (minuteIndex + now.getHours() * 4) % affirmations.length; // Cambia la frase también según la hora
    document.getElementById('affirmation').textContent = affirmations[affirmationIndex];
}

// Función principal para actualizar reloj y afirmación
function updateDisplay() {
    updateClock();
    updateAffirmation();
}

// Actualizar cada segundo
setInterval(updateDisplay, 1000);

// Inicializar en la carga de la página
updateDisplay();
