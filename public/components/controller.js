import { fetchMeetingPoints, fetchTypeServices } from '../services/apiServices';

let dataInput = {
    meetingPoint: { id: '', name: '' },
    destination: { id: '', name: '' }
};

const input__meetingPoint = document.getElementById('input__meeting-point');
const input__destination = document.getElementById('input__destination');

const handleInput = (input, suggestions, inputName, destinations) => {
    input.addEventListener('input', e => {
        let userData = e.target.value.toLowerCase();

        let listHTML = '';
        const filteredDestinations = destinations.filter(point =>
            point.name.toLowerCase().includes(userData)
        );
        
        filteredDestinations.forEach(point => {
            listHTML += `<li data-id="${point.id}">${point.name}</li>`;
        });

        suggestions.innerHTML = listHTML;
        suggestions.parentNode.classList.toggle('active', userData.length > 0);

        if (inputName === 'meetingPoint') {
            input__meetingPoint.classList.toggle('active', userData.length > 0);
        } else if (inputName === 'destination') {
            input__destination.classList.toggle('active', userData.length > 0);
        }
    });

    suggestions.addEventListener('click', e => {
        if (e.target.tagName === 'LI') {
            const selectedId = e.target.getAttribute('data-id');
            const selectedName = e.target.textContent;

            input.value = selectedName;

            dataInput[inputName] = { id: selectedId, name: selectedName };

            suggestions.parentNode.classList.remove('active');
            input.parentNode.classList.remove('active');

            if (dataInput.meetingPoint.id === '1' && dataInput.destination.id === '2') {
                const totalInput = document.getElementById('total-quantity');
                totalInput.value = '1100';
            } else {
                const totalInput = document.getElementById('total-quantity');
                totalInput.value = '';
            }

            console.log(dataInput);
        }
    });
};

fetchMeetingPoints()
    .then(data => {
        const destinations = data;
        handleInput(input__meetingPoint, document.getElementById('meetingpoint-suggestions'), 'meetingPoint', destinations);
    })
    .catch(error => {
        console.error('Error al obtener los puntos de encuentro:', error);
    });

fetchTypeServices()
    .then(data => {
        console.log(data);
        // Procesar los datos aquí según sea necesario
        // Llamar handleInput() para input__destination aquí
        handleInput(input__destination, document.getElementById('destination-suggestions'), 'destination', data);
    })
    .catch(error => {
        console.error('Error al obtener los tipos de servicio:', error);
    });




























//     import { fetchMeetingPoints, fetchTypeServices } from './services/apiServices.js';

// // Objeto para almacenar los datos de entrada
// let dataInput = {
//     meetingPoint: { id: '', name: '' },
//     destination: { id: '', name: '' }
// };

// // Elementos de entrada
// const input__meetingPoint = document.getElementById('input__meeting-point');
// const input__destination = document.getElementById('input__destination');

// // Función para manejar la entrada de texto y sugerencias
// const handleInput = (input, suggestions, inputName, destinations) => {
//     input.onkeyup = e => {
//         let userData = e.target.value.toLowerCase();

//         let listHTML = '';
//         const filteredDestinations = destinations.filter(point =>
//             point.name.toLowerCase().includes(userData)
//         );
//         filteredDestinations.forEach(point => {
//             listHTML += `<li data-id="${point.id}">${point.name}</li>`;
//         });

//         suggestions.innerHTML = listHTML;
//         suggestions.parentNode.classList.toggle('active', userData.length > 0);

//         // Cambiar la clase del elemento según la presencia de sugerencias
//         if (inputName === 'meetingPoint') {
//             input__meetingPoint.classList.toggle('active', userData.length > 0);
//         } else if (inputName === 'destination') {
//             input__destination.classList.toggle('active', userData.length > 0);
//         }
//     };

//     suggestions.addEventListener('click', e => {
//         if (e.target.tagName === 'LI') {
//             const selectedId = e.target.getAttribute('data-id');
//             const selectedName = e.target.textContent;

//             input.value = selectedName;

//             // Guardar la selección en el objeto dataInput
//             dataInput[inputName] = { id: selectedId, name: selectedName };

//             suggestions.parentNode.classList.remove('active');
//             input.parentNode.classList.remove('active');

//             // Lógica condicional para mostrar el valor deseado en el siguiente contenedor
//             if (dataInput.meetingPoint.id === '1' && dataInput.destination.id === '2') {
//                 const totalInput = document.getElementById('total-quantity');
//                 totalInput.value = '1100';
//             } else {
//                 // Restablecer el valor del siguiente contenedor si la condición no se cumple
//                 const totalInput = document.getElementById('total-quantity');
//                 totalInput.value = '';
//             }

//             console.log(dataInput); // Mostrar el objeto dataInput en la consola
//         }
//     });
// };

// // Llamar a fetchMeetingPoints para obtener los puntos de encuentro
// fetchMeetingPoints()
//     .then(data => {
//         const destinations = data;

//     })
//     .catch(error => {
//         console.error('Error al obtener los datos:', error);
//     });

// // Llamar a fetchTypeServices para obtener los tipos de servicio
// fetchTypeServices()
//     .then(data => {
//         console.log(data);
//         // Procesar los datos aquí según sea necesario
//     })
//     .catch(error => {
//         console.error('Error al obtener los datos:', error);
//     });
