// import { fetchMeetingPoints } from '../../services/apiServices.js';

const input__meetingPoint = document.getElementById('meetingpoint');
const meetingpointSuggestions = document.getElementById('meetingpoint-suggestions');
const input__destination = document.getElementById('destination');
const destinationSuggestions = document.getElementById('destination-suggestions');

// let allPoints = await fetchMeetingPoints();

input__meetingPoint.addEventListener('input', () => {
    if (input__meetingPoint.value.length || input__destination.value.length) {
        meetingpointSuggestions.style.height = '150px';
        showPoints();
    } else {
        meetingpointSuggestions.style.height = '0';
        meetingpointSuggestions.innerHTML = '';
    }
});

input__destination.addEventListener('input', () => {
    if (input__meetingPoint.value.length || input__destination.value.length) {
        destinationSuggestions.style.height = '150px';
        showPoints();
    } else {
        destinationSuggestions.style.height = '0';
        // Limpiar sugerencias cuando no hay texto en los inputs
        destinationSuggestions.innerHTML = '';
    }
});

function showPoints() {
    // Limpiar sugerencias previas
    meetingpointSuggestions.innerHTML = '';
    destinationSuggestions.innerHTML = '';
  
    // Mostrar todos los puntos de encuentro y destino
    allPoints.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point.name;
        meetingpointSuggestions.appendChild(li.cloneNode(true));
        destinationSuggestions.appendChild(li.cloneNode(true));
    });
}

function selectPoints() {
    // Implementa esta función para manejar la selección de puntos de encuentro o destino
}

meetingpointSuggestions.addEventListener('click', handleMeetingPointSelection);
destinationSuggestions.addEventListener('click', handleDestinationSelection);

// Función para manejar la selección de un punto de encuentro
function handleMeetingPointSelection(event) {
    const selectedPoint = event.target.textContent;
    // Llena el input__meetingPoint con el texto seleccionado
    input__meetingPoint.value = selectedPoint;
    // Oculta las sugerencias de meeting point
    meetingpointSuggestions.style.height = '0';
}

// Función para manejar la selección de un punto de destino
function handleDestinationSelection(event) {
    const selectedPoint = event.target.textContent;
    // Llena el input__destination con el texto seleccionado
    input__destination.value = selectedPoint;
    // Oculta las sugerencias de destination
    destinationSuggestions.style.height = '0';
}