const buttonPay = document.getElementById('button_pay');
const containerOne = document.getElementById('container_left_one');
const containerTwo = document.getElementById('container_left_two');

// Inicializa paymentGateway
let paymentGateway = false;

// Función para alternar los contenedores
function toggleContainers() {
    if (paymentGateway) {
        containerOne.style.display = 'none';
        containerTwo.style.display = 'block';
    } else {
        containerOne.style.display = 'block';
        containerTwo.style.display = 'none';
    }
}

// Evento al hacer clic en el botón
buttonPay.addEventListener('click', () => {
    // Cambia el estado de paymentGateway
    paymentGateway = !paymentGateway;

    // Alterna la visibilidad de los contenedores
    toggleContainers();
});

// Inicializa los contenedores al cargar la página
toggleContainers();