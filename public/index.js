import { getLocations, getTypesServies } from './services/apiServices.js';

// Variables
let locations;
let typesServices

// Función para hacer las peticiones correspodientes
const fetchData = async () => {
        locations = await getLocations();
        console.log(locations)
        typesServices = await getTypesServies();
};

// Llamar a la función para obtener las ubicaciones
fetchData();

// Obtener el elemento de selección
const selectLocations = document.getElementById('selectLocations');

// Agregar evento de clic para mostrar opciones
selectLocations.addEventListener('click', () => {
    const optionsContainer = selectLocations.querySelector('.options');
    optionsContainer.innerHTML = ''; // Limpiar opciones existentes
    console.log(typesServices)

    if (typesServices && typesServices.length) {
        typesServices.forEach(typeService => {  
            const option = document.createElement('li');
            option.className = 'option';
            option.innerHTML = `
                <i class="bx bxl-typeService" style="color: #000;"></i>
                <span class="option-text">${typeService.type_service}</span>
            `;
            option.addEventListener('click', () => {
                sBtn_text.innerText = typeService.type_service; // Actualiza el texto del botón
                optionsContainer.innerHTML = ''; // Limpia las opciones
                optionMenu.classList.remove("active"); // Cierra el menú
            });
            optionsContainer.appendChild(option);
        });
    } else {
        console.log('No hay ubicaciones disponibles');
    }
});

// Manejo del menú
const optionMenu = document.querySelector(".select-menu");
const selectBtn = optionMenu.querySelector(".select-btn");
const sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));



const input__meetingPoint = document.getElementById('meetingpoint');
const meetingpointSuggestions = document.getElementById('meetingpoint-suggestions');
const input__destination = document.getElementById('destination');
const destinationSuggestions = document.getElementById('destination-suggestions');



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
    locations.forEach(point => {
        console.log(point)
        const li = document.createElement('li');
        li.textContent = point.location_name;
        meetingpointSuggestions.appendChild(li.cloneNode(true));
        destinationSuggestions.appendChild(li.cloneNode(true));
    });
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



flatpickr("#timepicker", {
    enableTime: true, // Habilitar la selección de hora
    noCalendar: true, // Ocultar el calendario
    dateFormat: "h:i K", // Formato de la hora con AM/PM
    time_24hr: false // Usar formato de 12 horas con AM/PM
  });
  let selectedDates = [];
  
          flatpickr("#date-range", {
              mode: "range",
              minDate: "today",
              dateFormat: "Y-m-d",
              onClose: function(selectedDates, dateStr, instance) {
                  // Update selectedDates array with the range
                  selectedDates = instance.selectedDates;
              }
          });
  
  