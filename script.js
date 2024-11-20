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
